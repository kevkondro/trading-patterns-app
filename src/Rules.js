export default function Rules() {
  const styleList = {
    fontSize: "20px",
    letterSpacing: "0.015em",
    fontFamily: "Droid Sans"
  };
  const liStyle = {
    padding: ".5em"
  };
  return (
    <div style={styleList}>
      <p></p>
      <ul>
        <li style={liStyle}>
          Check events for the day before trading and mark the time on the
          chart.
        </li>
        <li style={liStyle}>
          Assess probability, risk, and reward (Chapter 25, Ranges). Comment the
          probability and set profit / loss levels accordingly.
        </li>
        <li style={liStyle}>
          When scalping monitor for bad signals and close the trade
          early if necessary, not letting the trade go for breakeven or loss.
        </li>
        <li style={liStyle}>
          Check left side and evaluate market cycle: spike, channel, or range?
          Comment on the chart. Trade accordingly.
        </li>
        <li style={liStyle}>
          Comment the signal on the chart before the trade.
        </li>
      </ul>
    </div>
  );
}
