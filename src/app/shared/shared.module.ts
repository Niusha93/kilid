import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./material.module";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [],
  imports: [FormsModule, ReactiveFormsModule, MaterialModule, FlexLayoutModule],
  exports: [FormsModule, ReactiveFormsModule, MaterialModule, FlexLayoutModule]
})
export class SharedModule {}
