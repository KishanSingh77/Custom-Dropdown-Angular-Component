import { Component, OnInit, Input, OnChanges, SimpleChange, Output } from '@angular/core';
import { ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { Camera } from '../Models/Camera';
import { JsonPipe } from '@angular/common';
import { isArray, isObject } from 'util';
import { parse } from 'url';




@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class OtherComponent implements OnInit {

  // dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  sample = [];


  @Input('camera_names') dropdownList = [];


  @Output() public childEvent = new EventEmitter();

  show: Boolean = false;

  constructor() { }

  ngOnInit() {


    this.updateDropDown();


  }

  onItemSelect(item: any) {
    if (!this.selectedItems.includes(x => x.name === item.name)) {
      // this.selectedItems = [...this.selectedItems, item];



      this.fireEvent(this.selectedItems);
    }
  }
  onSelectAll(items: any) {


    this.fireEvent(this.selectedItems);
  }

  resetSelection() {
    this.selectedItems = [];
    this.fireEvent(this.selectedItems);
  }


  fireEvent(d) {
    this.childEvent.emit(d);

  }


  updateDropDown() {

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'name',
      textField: 'full_name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 7,
      allowSearchFilter: true,
    };
  }









}
