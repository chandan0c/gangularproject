import { Component, OnInit } from "@angular/core";
import { SurveyCreatorModel } from "survey-creator-core";
import "survey-core/survey.i18n.js";
import "survey-creator-core/survey-creator-core.i18n.js";
import { surveyJSON } from "./survey_json";
import "survey-core/defaultV2.css";
import "survey-creator-core/survey-creator-core.css";

@Component({
    // tslint:disable-next-line:component-selector
    selector: "component-survey-creator",
    templateUrl: "./creator.component.html",
    styleUrls: ["./creator.component.css"]
})
export class SurveyCreatorComponent implements OnInit {
    model: SurveyCreatorModel;
    ngOnInit() {
        const options = {
            showLogicTab: true
        };
        const creator = new SurveyCreatorModel(options);
        creator.JSON = surveyJSON;
        this.model = creator;
    }
}