import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-damage',
  templateUrl: './damage.component.html',
  styleUrls: ['./damage.component.scss']
})
export class DamageComponent implements OnInit {

  public baseDamage: number = 12;

  public numWatches: number = 0;
  public numShapedGlass: number = 0;

  public isCrit: boolean = false;
  public numLaserScopes: number = 0;

  public isEnemyAbove90: boolean = false;
  public numCrowbars: number = 0;

  public isEnemyBoss: boolean = false;
  public numArmorPiercingRounds: number = 0;

  public hasEnemy4Debuffs: boolean = false;
  public numDeathMarks: number = 0;
  public numIrradiantPearls: number = 0;


  constructor() { }

  ngOnInit(): void {
  }

  get damageMultiplier(): number {
    return this.critMultiplyer *
      this.watchMultiplyer *
      this.armorRoundsMultiplyer *
      this.crowbarMultiplyer *
      this.laserScopeMultiplyer *
      this.shapedGlassMultiplyer *
      this.deathMarkMultiplyer;
  }

  get critMultiplyer(): number {
    return 1 + (this.isCrit ? 1 : 0);
  }

  get watchMultiplyer(): number {
    return 1 + (0.2 * this.numWatches)
  }

  get armorRoundsMultiplyer(): number {
    return 1 + (this.isEnemyBoss ? 0.2 * this.numArmorPiercingRounds : 0);
  }

  get crowbarMultiplyer(): number {
    return 1 + (this.isEnemyAbove90 ? 0.75 * this.numCrowbars : 0);
  }

  get laserScopeMultiplyer(): number {
    return 1 + (this.isCrit ? 1 * this.numLaserScopes : 0);
  }

  get shapedGlassMultiplyer(): number {
    return Math.pow(2, this.numShapedGlass)
  }

  get deathMarkMultiplyer(): number {
    return 1 + (this.hasEnemy4Debuffs ? 0.5 * this.numDeathMarks : 0);
  }

  get irradiantPearlMultiplyer(): number {
    return 1 + this.numIrradiantPearls * 0.1
  }
}
