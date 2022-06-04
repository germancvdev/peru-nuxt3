import * as am5 from "@amcharts/amcharts5";

import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

import am5themes_dark from "@amcharts/amcharts5/themes/Dark";
import am5themes_material from "@amcharts/amcharts5/themes/Material";
import am5themes_responsive from "@amcharts/amcharts5/themes/Responsive";

export const useColumnChart = (tag: string) => {
  let root: am5.Root = null;
  const data = ref([]);
  function dispose() {
    root.dispose();
  }

  onUnmounted(() => {
    console.log("onUnmounted");
    dispose();
    root = null;
  });

  function changeTheme(m: string) {
    root?.setThemes([
      am5themes_Animated.new(root),
      am5themes_responsive.new(root),
      m == "dark" ? am5themes_dark.new(root) : am5themes_material.new(root),
    ]);
  }

  function drawing(m: string) {
    root = am5.Root.new(tag);
    changeTheme(m);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
      })
    );

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineY.set("visible", false);

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    let xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
    let yRenderer = am5xy.AxisRendererY.new(root, {});
    xRenderer.labels.template.setAll({
      rotation: -90,
      centerY: am5.p50,
      centerX: am5.p100,
      paddingRight: 15,
      fontSize: 10,
    });

    yRenderer.labels.template.setAll({
      fontSize: 10,
    });

    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        maxDeviation: 0.3,
        categoryField: "country",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0.3,
        renderer: yRenderer,
      })
    );

    // Create series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    let series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series 1",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        sequencedInterpolation: true,
        categoryXField: "country",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY}",
        }),
      })
    );

    series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5 });
    series.columns.template.adapters.add("fill", function (fill, target) {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });

    series.columns.template.adapters.add("stroke", function (stroke, target) {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });

    // Set data
    let data = [
      {
        country: "USA",
        value: 2025,
      },
      {
        country: "China",
        value: 1882,
      },
      {
        country: "Japan",
        value: 1809,
      },
      {
        country: "Germany",
        value: 1322,
      },
      {
        country: "UK",
        value: 1122,
      },
      {
        country: "France",
        value: 1114,
      },
      {
        country: "India",
        value: 984,
      },
      {
        country: "Spain",
        value: 711,
      },
      {
        country: "Netherlands",
        value: 665,
      },
      {
        country: "Russia",
        value: 580,
      },
      {
        country: "South Korea",
        value: 443,
      },
      {
        country: "Canada",
        value: 441,
      },
    ];

    xAxis.data.setAll(data);
    series.data.setAll(data);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);
  }

  return {
    drawing,
    changeTheme,
    dispose,
    data,
  };
};
