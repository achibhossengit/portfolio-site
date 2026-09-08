import { GitHubCalendar } from "react-github-calendar";

const GITHUB_USERNAME = "achibhossengit";

const contributionTheme = {
  light: ["#eee8d5", "#b9e4db", "#6fc9bb", "#2aa198", "#1a7a72"],
  dark: ["#1a222d", "#244842", "#3a7a6e", "#5aafa0", "#7dd3c0"],
};

const GithubActivity = ({ theme }) => (
  <section
    className="scroll-mt-20"
    id="github"
    aria-labelledby="github-contributions-title"
  >
    <h3
      className="mb-6 mt-20 text-center text-2xl font-semibold text-base-content/90 md:mt-24"
      id="github-contributions-title"
    >
      GitHub Contributions
    </h3>
    <div className="mt-3 w-full overflow-x-auto pb-1 font-mono text-base-content/60 transition-opacity duration-200 hover:text-base-content/80 [&_.react-activity-calendar]:mx-auto [&_.react-activity-calendar]:w-max [&_.react-activity-calendar]:max-w-full">
      <GitHubCalendar
        username={GITHUB_USERNAME}
        colorScheme={theme === "dark" ? "dark" : "light"}
        theme={contributionTheme}
        blockSize={11}
        blockMargin={3}
        fontSize={11}
        hideColorLegend={false}
        hideMonthLabels={false}
      />
    </div>
  </section>
);

export default GithubActivity;
