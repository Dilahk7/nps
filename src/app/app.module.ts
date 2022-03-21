import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './Components/Form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ITRComponent } from './itr/itr.component';
import { CdkTableModule } from '@angular/cdk/table';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from './Pipes/serach-filter.pipe';
import { DropSelectComponent } from './Components/Drop-select/drop-select.component';
import { MultiSelectComponent } from './Components/Multi-select/multi-select.component';

import { MultiselectPipePipe } from 'src/app/Pipes/multiselect-pipe.pipe';
import { MatTableModule } from '@angular/material/table';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { DropselectPipePipe } from './Pipes/dropselect-pipe.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { DateFilterComponent } from './Components/date-filter/date-filter.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateFilterPipe } from './Pipes/date-filter.pipe';
import { DateRangeFilterPipe } from './Pipes/date-range-filter.pipe';
import { MatNativeDateModule } from '@angular/material/core';
import { MatBadgeModule } from '@angular/material/badge';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { FormArrayComponent } from './form-array/form-array.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SearchFilterPipe,
    ITRComponent,
    DropSelectComponent,
    MultiSelectComponent,
    DropselectPipePipe,
    MultiselectPipePipe,
    DateFilterComponent,
    DateFilterPipe,
    DateRangeFilterPipe,
    FormArrayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CdkTableModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgxPaginationModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NoopAnimationsModule,
    MatSelectModule,
    MatDialogModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatChipsModule,
    MatBadgeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
