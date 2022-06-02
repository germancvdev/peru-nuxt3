import * as am5 from "@amcharts/amcharts5";

import * as percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

import am5themes_Micro from "@amcharts/amcharts5/themes/Dark";
import am5themes_Material from "@amcharts/amcharts5/themes/Material";

export const useChart = (mode: any, ref: string) => {
  const root = am5.Root.new(ref);
  changeTheme(mode);
  function changeTheme(m: any) {
    root.setThemes([
      am5themes_Animated.new(root),
      m == "dark" ? am5themes_Micro.new(root) : am5themes_Material.new(root),
    ]);
  }
  function drawing() {
    let chart = root.container.children.push(
      percent.PieChart.new(root, {
        endAngle: 270,
      })
    );

    let series = chart.series.push(
      percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "category",
        endAngle: 270,
      })
    );

    series.states.create("hidden", {
      endAngle: -90,
    });

    series.data.setAll([
      {
        category: "Lithuania",
        value: 501.9,
      },
      {
        category: "Czechia",
        value: 301.9,
      },
      {
        category: "Ireland",
        value: 201.1,
      },
      {
        category: "Germany",
        value: 165.8,
      },
      {
        category: "Australia",
        value: 139.9,
      },
      {
        category: "Austria",
        value: 128.3,
      },
      {
        category: "UK",
        value: 99,
      },
    ]);

    series.appear(1000, 100);
  }

  return {
    drawing,
    changeTheme,
  };
};

//     // Create chart
//     // https://www.amcharts.com/docs/v5/charts/xy-chart/
//     let chart = root.container.children.push(
//       am5xy.XYChart.new(root, {
//         panX: false,
//         panY: false,
//         wheelX: "panX",
//         wheelY: "zoomX",
//         layout: root.verticalLayout,
//         background: am5.Rectangle.new(root, {
//           fillGradient: gradient,
//         }),
//       })
//     );

//     // Add legend
//     // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
//     let legend = chart.children.push(
//       am5.Legend.new(root, {
//         centerX: am5.p50,
//         x: am5.p50,
//       })
//     );

//     let data = [
//       {
//         category: "Burj Khalifa",
//         height: 828,
//         ratio: 1 / 5.12,
//         pictureSettings: {
//           src: icon1,
//         },
//       },
//       {
//         category: "Willis Tower",
//         height: 527,
//         ratio: 1 / 5.06,
//         pictureSettings: {
//           src: icon2,
//         },
//       },
//       {
//         category: "Taipei 101",
//         height: 508,
//         ratio: 1 / 6.73,
//         pictureSettings: {
//           src: icon3,
//         },
//       },
//       {
//         category: "Petronas Towers",
//         height: 452,
//         ratio: 1 / 2.76,
//         pictureSettings: {
//           src: icon4,
//         },
//       },
//       {
//         category: "Empire State Building",
//         height: 449,
//         ratio: 1 / 3.41,
//         pictureSettings: {
//           src: icon5,
//         },
//       },
//     ];

//     // Create axes
//     // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
//     let xAxis = chart.xAxes.push(
//       am5xy.CategoryAxis.new(root, {
//         categoryField: "category",
//         renderer: am5xy.AxisRendererX.new(root, {
//           inside: true,
//         }),
//         tooltip: am5.Tooltip.new(root, {}),
//       })
//     );

//     let xRenderer = xAxis.get("renderer");

//     xRenderer.labels.template.setAll({
//       fill: am5.color(0xffffff),
//       //   fillOpacity: 0.5,
//     });

//     xRenderer.grid.template.set("forceHidden", true);

//     xAxis.data.setAll(data);

//     let yAxis = chart.yAxes.push(
//       am5xy.ValueAxis.new(root, {
//         min: 0,
//         max: 1000,
//         renderer: am5xy.AxisRendererY.new(root, {}),
//       })
//     );

//     let yRenderer = yAxis.get("renderer");

//     yRenderer.grid.template.setAll({
//       strokeDasharray: [4, 4],
//     });

//     // Add series
//     // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
//     let series = chart.series.push(
//       am5xy.ColumnSeries.new(root, {
//         xAxis: xAxis,
//         yAxis: yAxis,
//         valueYField: "height",
//         categoryXField: "category",
//       })
//     );

//     series.columns.template.setAll({
//       width: am5.percent(100),
//       strokeOpacity: 0,
//       fillOpacity: 0,
//     });

//     series.bullets.push(function (root, series, dataItem) {
//       let tower = am5.Picture.new(root, {
//         height: 100,
//         centerX: am5.p50,
//         centerY: am5.p100,
//         opacity: 0.5,
//         templateField: "pictureSettings",
//       });

//       tower.adapters.add("height", function (height, target) {
//         if (dataItem) {
//           height = dataItem.get("bottom") - dataItem.get("top");
//         }
//         return height;
//       });

//       return am5.Bullet.new(root, {
//         locationY: 0,
//         sprite: tower,
//         dynamic: true,
//       });
//     });

//     series.bullets.push(function () {
//       return am5.Bullet.new(root, {
//         locationY: 1,
//         sprite: am5.Label.new(root, {
//           centerX: am5.p50,
//           centerY: am5.p100,
//           text: "{height} metres",
//           populateText: true,
//         }),
//       });
//     });

//     series.data.setAll(data);

//     // Make stuff animate on load
//     // https://www.amcharts.com/docs/v5/concepts/animations/
//     series.appear();
//     chart.appear(1000, 100);
//   }

//   return {
//     drawing,
//   };
// };
