import { NgModule } from "@angular/core";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
const MODULE = [
    MatCardModule, MatButtonModule, MatMenuModule,
    MatToolbarModule, MatIconModule, MatGridListModule,
    MatListModule, MatTabsModule, MatInputModule,
    MatBottomSheetModule
]

@NgModule({
    imports: MODULE,
    exports: MODULE
})

export class MaterialModule { }