import React from "react";
import { Title } from "@/shared/components/Titles";
import { dashboardViewStyles } from "./styles/DashboardView";
import { ListYearsWithMultipleWinners } from "../ListYearsWithMultipleWinners";
import { TopTreeStudiosWithWinners } from "../TopTreeStudiosWithWinners";
import { ProducersMinMaxIntervalWin } from "../ProducersMinMaxIntervalWin";
import { ListMovieByYear } from "../ListMovieByYear";

export function DashboardView() {
  return (
    <div className={dashboardViewStyles()}>
      <Title text="DashboardView" />

      <div className="flex flex-row flex-wrap gap-x-2 gap-y-3">
        <div className="w-[calc(50%-0.33rem)]">
          <ListYearsWithMultipleWinners />
        </div>

        <div className="w-[calc(50%-0.33rem)]">
          <TopTreeStudiosWithWinners />
        </div>

        <div className="w-[calc(50%-0.33rem)]">
          <ProducersMinMaxIntervalWin />
        </div>

        <div className="w-[calc(50%-0.33rem)]">
          <ListMovieByYear />
        </div>
      </div>
    </div>
  );
}
