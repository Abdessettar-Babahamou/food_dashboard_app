"use client";

import { RadialBar, RadialBarChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A radial chart";

const chartData = [
  { order: "Other", Orders: 0, fill: "var(--color-safari)" },
  { order: "Delivery", Orders: 187, fill: "#9288E0" },
  { order: "To_Go", Orders: 173, fill: "#FFB572" },
  { order: "Dine_In", Orders: 150, fill: "#FF7CA3" },
];

const chartConfig = {
   Other: {
    label: "Other",
    color: "hsl(var(--chart-2))",
  },
  Delivery: {
    label: "Delivery",
    color: "hsl(var(--chart-3))",
  },
  To_Go: {
    label: "To_Go",
    color: "hsl(var(--chart-4))",
  },
  Dine_In: {
    label: "Dine_In",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function OrderChart() {
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[250px] h-60"
    >
      <RadialBarChart data={chartData} innerRadius={30} outerRadius={110}>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel nameKey="order" />}
        />
        <RadialBar dataKey="Orders" background />
      </RadialBarChart>
    </ChartContainer>
  );
}
