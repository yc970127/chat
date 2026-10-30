import { tool } from 'ai'
import { z } from 'zod'
import type { UIToolInvocation } from 'ai'

export type ChartUIToolInvocation = UIToolInvocation<typeof chartTool>

export const chartTool = tool({
  description: 'Create a chart visualization with one or multiple data series. Use a line or area chart for time-series data and trends, a bar chart to compare values across categories, and a donut chart to show how a total splits into parts. When the user does not provide data, make up realistic sample data instead of asking for it.',

  inputSchema: z.object({
    title: z.string().optional().describe('Title of the chart'),

    type: z.enum(['line', 'area', 'bar', 'donut'])
      .optional()
      .describe('Type of chart, defaults to line.'),

    stacked: z.boolean()
      .optional()
      .describe('Stack the series on top of each other, only for area and bar charts with several series'),

    // 使用 catchall 保留动态字段，避免 z.record 生成 propertyNames
    data: z.array(
      z.object({}).catchall(
        z.union([z.string(), z.number()])
      )
    ).min(1).describe('REQUIRED: Array of data points (minimum 1 point). Each object must contain the xKey property and all series keys'),

    xKey: z.string()
      .describe('The property name in data objects to use for x-axis values'),

    series: z.array(z.object({
      key: z.string().describe('The property name in data objects for this series'),
      name: z.string().describe('Display name for this series in the legend'),
      color: z.string().describe('Hex color code for this series')
    })).min(1),

    xLabel: z.string().optional().describe('Optional label for x-axis'),
    yLabel: z.string().optional().describe('Optional label for y-axis')
  }),

  execute: async ({ title, type, stacked, data, xKey, series, xLabel, yLabel }) => {
    await new Promise(resolve => setTimeout(resolve, 1500))

    return {
      title,
      type,
      stacked,
      data,
      xKey,
      series,
      xLabel,
      yLabel
    }
  }
})
