#!/usr/bin/env python3
import hashlib
import os
import shutil
import subprocess
from pathlib import Path

ROOT = Path('public/Projects/ChickFilA')
OUT = ROOT / 'organized'
TMP = Path('/tmp/chickfila-organize')
TMP.mkdir(parents=True, exist_ok=True)

# Curated candidates from concept-heavy decks.
# stage order target: inspiration -> sketch -> refinement -> development_50_model -> development_final_model
CANDIDATES = [
    # Lemon Squeezie
    ('Chick-fil-A_Toy_Token_Concepts_Page_05.jpg', 'lemon_squeezie', 'inspiration', 10),
    ('Chick-fil-A_Toy_Token_Concepts_Page_05.jpg', 'lemon_squeezie', 'sketch', 20),
    ('Chick-fil-A_Toy_Token_Concepts_Page_04.jpg', 'lemon_squeezie', 'refinement', 30),
    ('Chick Fil A-Presentation-083017_Page_10.jpg', 'lemon_squeezie', 'development_50_model', 40),
    ('Chick Fil A-Presentation-083017_Page_30.jpg', 'lemon_squeezie', 'development_50_model', 50),
    ('Chick Fil A-Presentation-112817_Page_07.jpg', 'lemon_squeezie', 'development_50_model', 60),
    ('Chick Fil A-Presentation-112817_Page_08.jpg', 'lemon_squeezie', 'development_50_model', 70),
    ('Chick Fil A-Presentation-112817_Page_09.jpg', 'lemon_squeezie', 'development_50_model', 80),
    ('Chick Fil A-Presentation-120417 (1)_Page_10.jpg', 'lemon_squeezie', 'development_final_model', 90),
    ('Chick Fil A-Presentation-120417 (1)_Page_12.jpg', 'lemon_squeezie', 'development_final_model', 100),

    # Run Token Run
    ('CFA-Presentation-R3-081617_Page_18.jpg', 'run_token_run', 'inspiration', 10),
    ('CFA-Presentation-R3-081617_Page_12.jpg', 'run_token_run', 'development_50_model', 20),
    ('Chick Fil A-Presentation-083017_Page_20.jpg', 'run_token_run', 'development_final_model', 30),

    # Joy Basket (interpreted as Eggs in a Basket family)
    ('Chick Fil A-R5-Presentation-092517_Page_02.jpg', 'eggs_in_a_basket', 'inspiration', 10),
    ('Chick Fil A-R5-Presentation-092517_Page_03.jpg', 'eggs_in_a_basket', 'development_50_model', 20),
    ('Chick Fil A-R5-Presentation-092517_Page_08.jpg', 'eggs_in_a_basket', 'development_final_model', 30),

    # Joy Machine (additional concept)
    ('CFA-Presentation-R3-081617_Page_03.jpg', 'joy_machine', 'inspiration', 10),
    ('CFA-Presentation-R3-081617_Page_06.jpg', 'joy_machine', 'development_50_model', 20),
]

PRESENTATION_HINTS = (
    'Presentation',
    'CFA-Presentation',
)


def dims(path: Path):
    out = subprocess.check_output([
        'sips', '-g', 'pixelWidth', '-g', 'pixelHeight', str(path)
    ], text=True)
    w = h = None
    for line in out.splitlines():
        if 'pixelWidth:' in line:
            w = int(line.split(':', 1)[1].strip())
        if 'pixelHeight:' in line:
            h = int(line.split(':', 1)[1].strip())
    if not w or not h:
        raise RuntimeError(f'Could not read dimensions for {path}')
    return w, h


def thumb_hash(path: Path) -> str:
    thumb = TMP / (path.name + '.thumb.jpg')
    subprocess.run(['sips', '-Z', '64', str(path), '--out', str(thumb)], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    with open(thumb, 'rb') as f:
        return hashlib.md5(f.read()).hexdigest()


def has_footer_by_source(filename: str) -> bool:
    return any(h in filename for h in PRESENTATION_HINTS)


def crop_footer(src: Path, dst: Path):
    w, h = dims(src)
    # Remove ~7.5% from bottom, tuned to remove slide footer bars while preserving content.
    new_h = int(round(h * 0.925))
    subprocess.run([
        'sips', '--cropToHeightWidth', str(new_h), str(w), '--cropOffset', '0', '0', str(src), '--out', str(dst)
    ], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)


def main():
    OUT.mkdir(parents=True, exist_ok=True)

    # Group candidates by concept and keep stage ordering.
    by_concept = {}
    for fname, concept, stage, order in CANDIDATES:
        src = ROOT / fname
        if not src.exists():
            continue
        by_concept.setdefault(concept, []).append((src, stage, order))

    manifest = []
    for concept, rows in by_concept.items():
        concept_dir = OUT / concept
        concept_dir.mkdir(parents=True, exist_ok=True)

        # First pass: dedupe by visual hash, keep highest filesize.
        dedup = {}
        for src, stage, order in rows:
            h = thumb_hash(src)
            entry = dedup.get(h)
            size = src.stat().st_size
            if (entry is None) or (size > entry['size']):
                dedup[h] = {'src': src, 'stage': stage, 'order': order, 'size': size}

        kept = sorted(
            ((v['src'], v['stage'], v['order']) for v in dedup.values()),
            key=lambda x: x[2],
        )

        # Second pass: output renamed files.
        counts = {}
        for src, stage, order in kept:
            counts[stage] = counts.get(stage, 0) + 1
            idx = counts[stage]
            out_name = f'chickfila_{concept}_{stage}_{idx:02d}.jpg'
            dst = concept_dir / out_name
            if has_footer_by_source(src.name):
                crop_footer(src, dst)
                action = 'copied+cropped'
            else:
                shutil.copy2(src, dst)
                action = 'copied'
            manifest.append((concept, stage, src.name, dst.as_posix(), action))

    # Manifest
    mf = OUT / '_manifest.csv'
    with open(mf, 'w', encoding='utf-8') as f:
        f.write('concept,stage,source,destination,action\n')
        for row in manifest:
            f.write(','.join(row) + '\n')


if __name__ == '__main__':
    main()
