import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {ExerciseComponent} from './exercise/exercise.component';
import {EditorComponent} from './editor/editor.component';
import {RunnerComponent} from './runner/runner.component';
import {EditorsComponent} from './editors/editors.component';
import {CodelabComponent} from './codelab/codelab.component';
import {MilestoneComponent} from './milestone/milestone.component';
import {StateService} from './state.service';
import {TestsComponent} from './tests/tests.component';
import {ReducersService} from './reducers.service';
import {CodelabConfigService} from '../../exercises/codelab-config-service';
import {AutorunComponent} from './autorun/autorun.component';
import {MonacoConfigService} from './monaco-config.service';
import {ResizeComponent} from './resize/resize.component';
import {AppConfigService, appConfig} from './app-config.service';
import {LoopProtectionService} from './loop-protection.service';
import {ScriptLoaderService} from './script-loader.service';
import {FeedbackModule} from './feedback/feedback.module';
import {FeedbackService} from './feedback/feedback.service';
let ngModuleConfig = {
  declarations: [
    AppComponent,
    ExerciseComponent,
    EditorComponent,
    RunnerComponent,
    EditorsComponent,
    CodelabComponent,
    MilestoneComponent,
    TestsComponent,
    AutorunComponent,
    ResizeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FeedbackModule
  ],
  providers: [
    StateService,
    ReducersService,
    CodelabConfigService,
    AppConfigService,
    MonacoConfigService,
    LoopProtectionService,
    ScriptLoaderService,
    FeedbackService
  ],
  bootstrap: [AppComponent]
};

// We use firebase for the feedback. If it's disabled, we should do no extra network requests.
if (appConfig.feedbackEnabled) {
  
} else {
  @NgModule({
  })
  class FakeAngularFileModule {
  }

  ngModuleConfig.imports.push(FakeAngularFileModule);
}


@NgModule(ngModuleConfig)
export class AppModule {
}
