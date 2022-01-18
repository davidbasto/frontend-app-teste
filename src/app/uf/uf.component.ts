import { UfService } from './services/uf.service';
import { Component, OnInit } from '@angular/core';
import { Uf } from './uf';
@Component({
  selector: 'app-uf',
  templateUrl: './uf.component.html',
  styleUrls: ['./uf.component.css']
})
export class UfComponent implements OnInit {

  ufs: Uf[] = [];

  constructor(private ufService: UfService) { }

  ngOnInit(): void {
    this.ufService.buscarUfs().subscribe(
      resultadoUfs => this.ufs = resultadoUfs
    );
  }

}
