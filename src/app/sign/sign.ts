import { Component, EventEmitter, Output } from '@angular/core';
import { outputFromObservable } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign',
  imports: [ReactiveFormsModule],
  templateUrl: './sign.html',
  styleUrl: './sign.scss',
})
export class SignComponent {

  userLink = new FormControl('')

  readonly linkChange = outputFromObservable(this.userLink.valueChanges)

}

