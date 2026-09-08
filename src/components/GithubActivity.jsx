import { GitHubCalendar } from "react-github-calendar";
import Divider from "@/components/Divider";

const GITHUB_USERNAME = "achibhossengit";

const contributionTheme = {
  light: ["#eee8d5", "#b9e4db", "#6fc9bb", "#2aa198", "#1a7a72"],
  dark: ["#1a222d", "#244842", "#3a7a6e", "#5aafa0", "#7dd3c0"],
};

const GithubActivity = ({ theme }) => (
  <section className="scroll-mt-20" id="github">
    <Divider label="GitHub" />
    <div className="mt-3 w-full overflow-x-auto pb-1 font-mono text-base-content/60 [&_.react-activity-calendar]:mx-auto [&_.react-activity-calendar]:w-max [&_.react-activity-calendar]:max-w-full">
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
