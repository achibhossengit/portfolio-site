import { useState, useEffect } from "react";

const CareerRoadmap = () => {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [months, setMonths] = useState([]);
  const [goalsData, setGoalsData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/goalsData.json");
        const data = await res.json();
        setGoalsData(data);
      } catch (err) {
        console.error("Failed to load projects:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

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
  }, [goalsData]);

  const handleMonthClick = (monthId) => {
    setSelectedMonth(monthId);
  };

  if (loading) {
    return (
      <div className="text-center py-10 text-gray-500">
        Loading Career Roadmap...
      </div>
    );
  }
  return (
    <div className="container max-w-6xl mx-auto mt-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">
        Career Roadmap
      </h2>

      <div className="overflow-x-auto pb-4 ">
        <div className="relative flex space-x-6 min-w-max px-0 sm:px-2">
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
        <div
          key={selectedMonth}
          className="max-w-xl h-56 overflow-auto mx-auto border-2 border-white rounded-lg shadow-lg my-2 p-6"
        >
          <ul className="animate-in fade-in zoom-in-95 duration-500 space-y-3">
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
                      goal.isdone && "line-through"
                    }`}
                  >
                    {goal.title}
                  </span>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CareerRoadmap;
