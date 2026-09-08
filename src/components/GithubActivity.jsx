import { GitHubCalendar } from "react-github-calendar";

const GITHUB_USERNAME = "achibhossengit";

const contributionTheme = {
  light: ["#eee8d5", "#b9e4db", "#6fc9bb", "#2aa198", "#1a7a72"],
  dark: ["#1a222d", "#244842", "#3a7a6e", "#5aafa0", "#7dd3c0"],
};

const GithubActivity = ({ theme }) => (
  <section className="activity">
    <h2 className="section-title">GitHub</h2>
    <div className="calendar-wrap">
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
