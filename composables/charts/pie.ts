import * as am5 from "@amcharts/amcharts5";

import * as percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

import am5themes_dark from "@amcharts/amcharts5/themes/Dark";
import am5themes_material from "@amcharts/amcharts5/themes/Material";
import am5themes_responsive from "@amcharts/amcharts5/themes/Responsive";

export const usePieChart = (tag: string) => {
  let root: am5.Root = null;
  const data = ref([]);
  function dispose() {
    root.dispose();
  }

  onUnmounted(() => {
    dispose();
  });

  function changeTheme(m: string) {
    root.setThemes([
      am5themes_Animated.new(root),
      am5themes_responsive.new(root),
      m == "dark" ? am5themes_dark.new(root) : am5themes_material.new(root),
    ]);
  }

  function drawing(m: string) {
    root = am5.Root.new(tag);
    changeTheme(m);

    let chart = root.container.children.push(
      percent.PieChart.new(root, {
        endAngle: 270,
        paddingRight: 80,
        paddingLeft: 80,
      })
    );

    let series = chart.series.push(
      percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "category",
        endAngle: 270,
      })
    );

    series.labels.template.setAll({
      fontSize: 10,
    });

    series.states.create("hidden", {
      endAngle: -90,
    });

    series.data.setAll(data.value);

    series.appear(1000, 100);
  }

  return {
    drawing,
    changeTheme,
    dispose,
    data,
  };
};
