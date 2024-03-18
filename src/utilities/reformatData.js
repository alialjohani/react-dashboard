const counter = {
  AgentSatisfaction: {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  },
  ServiceSatisfaction: {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  },
};

var prepareSeriesOverallData = function (counterArr, total) {
  const series = [];
  const dataObj = {
    data: [],
  };
  for (let i = 0; i < total; i++) {
    dataObj.data.push({
      id: i,
      value: counterArr[i + 1],
      label: `${i + 1} out of ${total}`,
    });
  }
  series.push(dataObj);
  return series;
};

export const reformatData = function (dataArr) {
  console.log("dataArr=", dataArr);
  const agentsCounters = new Map();
  const timeCounters = new Map();
  dataArr.forEach((e) => {
    counter.AgentSatisfaction[Number(e.AgentSatisfaction)]++;
    counter.ServiceSatisfaction[Number(e.ServiceSatisfaction)]++;
    let tmp;
    if (agentsCounters.has(e.agentName)) {
      tmp = agentsCounters.get(e.agentName);
    } else {
      tmp = {
        ServiceSatisfactionCounter: new Array(5).fill(0),
        AgentSatisfactionCounter: new Array(5).fill(0),
      };
    }
    tmp.ServiceSatisfactionCounter[e.ServiceSatisfaction - 1]++;
    tmp.AgentSatisfactionCounter[e.AgentSatisfaction - 1]++;
    agentsCounters.set(e.agentName, tmp);
    //e.createdDate
    let hour = Number(e.createdDate.substring(11, 13));
    if (timeCounters.has(hour)) {
      timeCounters.set(hour, timeCounters.get(hour) + 1);
    } else {
      timeCounters.set(hour, 1);
    }
  });
  const timeData = prepareForHourTimeData(timeCounters);
  const seriesAgentSatisfactionOverall = prepareSeriesOverallData(
    counter.AgentSatisfaction,
    5,
  );
  const seriesServiceSatisfactionOverall = prepareSeriesOverallData(
    counter.ServiceSatisfaction,
    5,
  );
  return {
    seriesAgentSatisfactionOverall,
    seriesServiceSatisfactionOverall,
    ...prepareForAgentsData(agentsCounters),
    timeData,
  };
};

const prepareForHourTimeData = function (timeCounters) {
  console.log("timeCounters>>", timeCounters);
  const data = [];
  timeCounters.forEach((val, key) => {
    data.push({ hourLabel: key, hourCount: val });
    console.log("obj: ", { id: key, label: key.toString(), data: [val] });
  });
  return data;
};
const prepareForAgentsData = function (agentsCounters) {
  const scoresServiceSatisfaction = {
    fives: [],
    fours: [],
    threes: [],
    twos: [],
    ones: [],
  };
  const scoresAgentSatisfaction = {
    fives: [],
    fours: [],
    threes: [],
    twos: [],
    ones: [],
  };

  const labels = [];
  agentsCounters.forEach((v, k) => {
    labels.push(k);
    scoresServiceSatisfaction.ones.push(v.ServiceSatisfactionCounter[0]);
    scoresServiceSatisfaction.twos.push(v.ServiceSatisfactionCounter[1]);
    scoresServiceSatisfaction.threes.push(v.ServiceSatisfactionCounter[2]);
    scoresServiceSatisfaction.fours.push(v.ServiceSatisfactionCounter[3]);
    scoresServiceSatisfaction.fives.push(v.ServiceSatisfactionCounter[4]);
    scoresAgentSatisfaction.ones.push(v.AgentSatisfactionCounter[0]);
    scoresAgentSatisfaction.twos.push(v.AgentSatisfactionCounter[1]);
    scoresAgentSatisfaction.threes.push(v.AgentSatisfactionCounter[2]);
    scoresAgentSatisfaction.fours.push(v.AgentSatisfactionCounter[3]);
    scoresAgentSatisfaction.fives.push(v.AgentSatisfactionCounter[4]);
  });

  const seriesServiceSatisfaction = [
    { id: "ones", label: "ones", data: scoresServiceSatisfaction.ones },
    { id: "twos", label: "twos", data: scoresServiceSatisfaction.twos },
    { id: "threes", label: "threes", data: scoresServiceSatisfaction.threes },
    { id: "fours", label: "fours", data: scoresServiceSatisfaction.fours },
    { id: "fives", label: "fives", data: scoresServiceSatisfaction.fives },
  ];

  const seriesAgentSatisfaction = [
    { id: "ones", label: "ones", data: scoresAgentSatisfaction.ones },
    { id: "twos", label: "twos", data: scoresAgentSatisfaction.twos },
    { id: "threes", label: "threes", data: scoresAgentSatisfaction.threes },
    { id: "fours", label: "fours", data: scoresAgentSatisfaction.fours },
    { id: "fives", label: "fives", data: scoresAgentSatisfaction.fives },
  ];
  console.log("seriesAgentSatisfaction>>> ", seriesAgentSatisfaction);
  return { seriesServiceSatisfaction, seriesAgentSatisfaction, labels };
};