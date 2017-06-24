import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//Model Forms
import {ReactiveFormsModule} from '@angular/forms';

import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { ProductComponent } from './product/product.component';
import { MembersComponent } from './members/members.component';
import { PracticeComponent } from './practice/practice.component';
import { PipePracticeComponent } from './pipe-practice/pipe-practice.component';

import { SortPipe } from './app.sort';
import { MyDataService } from './my-data.service';

import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ModelFormComponent } from './model-form/model-form.component';
import { AddItemComponent } from './add-item/add-item.component';
import { BaseConverterComponent } from './base-converter/base-converter.component';
import { ServiceExampleComponent } from './service-example/service-example.component';
import { AnimationsComponent } from './animations/animations.component';
import { AppRoutes } from './app.routes';

@NgModule({
	declarations: [
	AppComponent,
	MyComponentComponent,
	ProductComponent,
	MembersComponent,
	PracticeComponent,
	PipePracticeComponent,
	SortPipe,
	TemplateFormsComponent,
	ModelFormComponent,
	AddItemComponent,
	BaseConverterComponent,
	ServiceExampleComponent,
	AnimationsComponent
	],
	imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	ReactiveFormsModule,
	HttpModule,
	RouterModule.forRoot(AppRoutes),
	],
	providers: [MyDataService],
	bootstrap: [AppComponent]
})
export class AppModule { }
