import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { ProductComponent } from './product/product.component';
import { MembersComponent } from './members/members.component';
import { PracticeComponent } from './practice/practice.component';
import { PipePracticeComponent } from './pipe-practice/pipe-practice.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ModelFormComponent } from './model-form/model-form.component';
import { AddItemComponent } from './add-item/add-item.component';
import { BaseConverterComponent } from './base-converter/base-converter.component';
import { ServiceExampleComponent } from './service-example/service-example.component';
import { AnimationsComponent } from './animations/animations.component';
import {Routes} from '@angular/router';

export const AppRoutes:Routes = [
{
		path: 'member', 
		component: MembersComponent
	},
	{
		path: 'product',
		component: ProductComponent
	},
	{
		path: "pipe-practice",
		component: PipePracticeComponent
	},
	{
		path: "template-form",
		component: TemplateFormsComponent
	},
	{
		path: "model-form",
		component: ModelFormComponent
	},
	{
		path: "add-task",
		component: AddItemComponent
	},
	{
		path: "base-converter",
		component: BaseConverterComponent
	},
	{
		path: "service-example",
		component: ServiceExampleComponent
	},
	{
		path: "animations",
		component: AnimationsComponent
	}
]