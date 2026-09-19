type Heading = { depth: number; slug: string; text: string };

const shortLabels: Record<string, string> = {
  "The Opportunity": "Opportunity",
  "The Result": "Result",
  "Understanding the Shopper": "The shopper",
  "The Existing Retail Environment": "Existing retail",
  "Designing Across Distance": "Viewing distance",
  "Visual and Verbal Direction": "Visual direction",
  "Connecting Inspiration to Store": "Inspiration",
  "Seasonal Display Concepts": "Seasonal concepts",
  "Endcap and In-Aisle System": "In-aisle system",
  "Standalone Activation": "Standalone",
  "Designing for the Creative Class": "The audience",
  "Research and Visual Direction": "Visual research",
  "Early Identity Exploration": "Identity studies",
  "Direction One: You've Been Framed": "Direction one",
  "Direction Two: It Starts With a Line": "Direction two",
  "Extending the Portfolio": "The portfolio",
  "Chobani Indulgence": "Indulgence",
  "Indulgence Design Options": "Design options",
  "Indulgence Package Direction": "Package direction",
  "Whole Milk Strategy": "Whole milk",
  "Whole Milk Design Considerations": "Considerations",
  "Whole Milk Package Options": "Package options",
  "50% Model and Testing": "Model testing",
  "Lemon Squeezy: 90% Prototype / 95% Reliability Target": "Working prototype",
  "Process and Visual Direction": "Design process",
  "Research and Strategy": "Research",
  "Final Presentation": "Final presentation",
  "Research and Framing": "Research",
  "Responsive Equipment": "Equipment",
  "Connected Experience": "Connected experience",
};

const chapterStages: Record<string, string[]> = {
  "3m-home-depot": ["Understand the shopper", "Study the store", "Define the hierarchy", "Set the direction", "Connect the experience", "Explore the display", "Develop the system", "Extend the idea", "Reflect on the result"],
  morgans: ["Define the opportunity", "Understand the audience", "Set the direction", "Explore the identity", "Develop the first direction", "Explore an alternative", "Extend the identity", "Reflect on the result"],
  "chick-fil-a": ["Explore generosity", "Explore generosity", "Explore generosity", "Explore generosity", "Explore generosity", "Explore freshness", "Explore freshness", "Test with families", "Resolve the prototype"],
  "boca-paila": ["Set the direction", "Develop the identity", "Explore the releases", "Shape the album", "Bring it into the world"],
  chobani: ["Set the direction", "Explore the packaging", "Develop the concept", "Frame the opportunity", "Study the details", "Resolve the packaging"],
  "nike-ko": ["Define the opportunity", "Understand the athlete", "Explore the product", "Develop the system", "Design the equipment", "Express the athlete", "Connect the experience", "Bring the story together"],
  sidestreat: ["Frame the idea", "Define the goals", "Develop the experience", "Explore the concept", "Understand the audience", "Build the identity", "Structure the experience", "Design the interface", "Bring it together"],
};

export function getProjectChapters(slug: string, headings: Heading[]) {
  if (slug === "rguide") {
    return [
      { id: "the-question", label: "The question" },
      { id: "the-experience", label: "The experience" },
      { id: "the-content", label: "The content" },
      { id: "the-publishing", label: "Publishing" },
      { id: "the-platform", label: "The platform" },
      { id: "the-result", label: "The result" },
    ];
  }
  return headings
    .filter(({ depth }) => depth === 2 || (slug === "sidestreat" && depth === 3))
    .map(({ slug: id, text }, index) => ({
      id,
      label: shortLabels[text.replace(/[‘’]/g, "'")] ?? text,
      eyebrow: chapterStages[slug]?.[index],
    }));
}
