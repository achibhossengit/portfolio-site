import { useState, useEffect } from "react";

const CareerRoadmap = () => {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [months, setMonths] = useState([]);

  const goalsData = {
    "2024-09": [
      { isdone: true, title: "Learn advanced React patterns" },
      { isdone: false, title: "Build 3 new portfolio projects" },
    ],
    "2024-10": [
      { isdone: false, title: "Master TypeScript integration" },
      { isdone: true, title: "Complete backend certification" },
    ],
    "2024-11": [
      { isdone: false, title: "Contribute to open source project" },
      { isdone: false, title: "Attend tech conference" },
    ],
    "2024-12": [
      { isdone: true, title: "Develop mobile app with React Native" },
      { isdone: false, title: "Start technical blog" },
    ],
    "2025-01": [
      { isdone: false, title: "Explore Web3 technologies" },
      { isdone: true, title: "Deepen Node.js expertise" },
    ],
    "2025-02": [
      { isdone: false, title: "Obtain AWS certification" },
      { isdone: false, title: "Build full-stack SaaS application" },
    ],
    "2025-03": [
      { isdone: true, title: "Learn GraphQL" },
      { isdone: false, title: "Improve UI/UX design skills" },
      { isdone: false, title: "Complete advanced course" },
      { isdone: false, title: "Network with industry professionals" },
    ],
    "2025-04": [
      { isdone: false, title: "Build AI-powered application" },
      { isdone: true, title: "Complete system design course" },
    ],
    "2025-05": [
      { isdone: false, title: "Launch personal SaaS product" },
      { isdone: false, title: "Mentor junior developers" },
    ],
    "2025-06": [
      { isdone: true, title: "Speak at tech meetup" },
      { isdone: false, title: "Optimize performance skills" },
    ],
    "2025-07": [
      { isdone: false, title: "Explore machine learning" },
      { isdone: false, title: "Build developer tools" },
    ],
    "2025-08": [
      { isdone: false, title: "Start tech podcast" },
      { isdone: true, title: "Contribute to major open source project" },
    ],
    "2025-09": [
      { isdone: false, title: "Start tech podcast" },
      { isdone: true, title: "Contribute to major open source project" },
    ],
  };

  const todayKey = `${new Date().getFullYear()}-${String(
    new Date().getMonth() + 1
  ).padStart(2, "0")}`;

  useEffect(() => {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const keys = Object.keys(goalsData).sort();

    const monthsArray = keys.map((key) => {
      const [year, month] = key.split("-");
      const name = `${monthNames[parseInt(month, 10) - 1]} ${year}`;
      return {
        id: key,
        name,
        goals: goalsData[key],
      };
    });

    setMonths(monthsArray);
    setSelectedMonth(
      monthsArray.find((m) => m.isCurrent)?.id ||
        monthsArray[monthsArray.length - 1]?.id
    );
  }, []);

  const handleMonthClick = (monthId) => {
    setSelectedMonth(monthId);
  };

  console.log({ months, selectedMonth });

  return (
    <div className="container max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8">Career Roadmap</h2>

      <div className="overflow-x-auto pb-4">
        <div className="relative flex space-x-6 min-w-max px-2">
          {/* Horizontal line behind all dots */}
          <div className="absolute top-[52px] left-0 right-0 h-0.5 bg-blue-200 z-0"></div>

          {months.map((month) => (
            <div
              key={month.id}
              className="flex flex-col items-center min-w-[120px] relative z-10"
            >
              <div className="mb-3">
                <span
                  className={`text-xs font-medium py-1 px-3 rounded-full whitespace-nowrap ${
                    month.id == selectedMonth
                      ? "text-blue-800 bg-blue-200 border border-blue-300"
                      : "text-gray-600 bg-gray-100"
                  }`}
                >
                  {month.name}
                </span>
              </div>

              <div
                className={`w-8 h-8 rounded-full cursor-pointer transition-all duration-300 flex items-center justify-center shadow-lg ${
                  selectedMonth === month.id
                    ? "bg-blue-600 ring-4 ring-blue-200 scale-110"
                    : month.id == todayKey
                    ? "bg-green-500 hover:bg-green-600 active:scale-95"
                    : "bg-blue-400 hover:bg-blue-500 active:scale-95"
                }`}
                onClick={() => handleMonthClick(month.id)}
              >
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>

              <div className="mt-2 text-xs text-gray-500">
                {month.goals.length} goals
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedMonth && (
        <div className="mt-8 mx-4 animate-in slide-in-from-top-16 duration-300">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {months.find((m) => m.id === selectedMonth)?.name} Goals
                {months.find((m) => m.id === selectedMonth).id == todayKey && (
                  <span className="ml-2 text-sm text-green-600 font-normal">
                    (Current Month)
                  </span>
                )}
              </h3>
            </div>
            <ul className="space-y-3">
              {months
                .find((m) => m.id === selectedMonth)
                ?.goals.map((goal, i) => (
                  <li key={goal.title} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={goal.isdone}
                      disabled
                      className="mt-1 mr-2"
                    />
                    <span
                      className={`text-sm leading-relaxed ${
                        goal.isdone
                          ? "line-through text-gray-400"
                          : "text-gray-700"
                      }`}
                    >
                      {goal.title}
                    </span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerRoadmap;
