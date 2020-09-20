import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatchResults } from 'src/app/shared/models/2019/match-results.model';
import { DataStorageService } from 'src/app/shared/services/2019/data-storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-scout-match',
  templateUrl: './scout-match.component.html',
  styleUrls: ['./scout-match.component.scss'],
})
export class ScoutMatchComponent implements OnInit {

  public autoPortInnerScore: number = 0;

  public autoPortTopScore: number = 0;

  public autoPortBottomScore: number = 0;

  public teleopPortInnerScore: number = 0;

  public teleopPortTopScore: number = 0;

  public teleopPortBottomScore: number = 0;


  public fgMatch: FormGroup = new FormGroup({
    autoLine: new FormControl(false, Validators.required),
    controlPanelColor: new FormControl(false, Validators.required),
    controlPanelRotation: new FormControl(false, Validators.required),
    groundPickup: new FormControl(false, Validators.required),
    humanLoadingPort: new FormControl(false, Validators.required),
    goesUnderControlPanel: new FormControl(false, Validators.required),
    canHang: new FormControl(false, Validators.required),
    canMoveOnBar: new FormControl(false, Validators.required),
    canBuddyHang: new FormControl(false, Validators.required),
    matchNotes: new FormControl('', Validators.required),
  });

  constructor(private dataStorage: DataStorageService,
    private snackBar: MatSnackBar) { }

  public ngOnInit(): void {
  }

  public autoPortInnerScoreInc(): void  {
    this.autoPortInnerScore += 1;
  }

  public autoPortInnerScoreDec(): void  {
    if (this.autoPortInnerScore >= 1) {
      this.autoPortInnerScore -= 1;
    }
  }

  public autoPortTopScoreInc(): void  {
    this.autoPortTopScore += 1;
  }

  public autoPortTopScoreDec(): void  {
    if (this.autoPortTopScore >= 1) {
      this.autoPortTopScore -= 1;
    }
  }

  public autoPortBottomScoreInc(): void  {
    this.autoPortBottomScore += 1;
  }

  public autoPortBottomScoreDec(): void  {
    if (this.autoPortBottomScore >= 1) {
      this.autoPortBottomScore -= 1;
    }
  }

  public teleopPortInnerScoreInc(): void  {
    this.teleopPortInnerScore += 1;
  }

  public teleopPortInnerScoreDec(): void  {
    if (this.teleopPortInnerScore >= 1) {
      this.teleopPortInnerScore -= 1;
    }
  }

  public teleopPortTopScoreInc(): void  {
    this.teleopPortTopScore += 1;
  }

  public teleopPortTopScoreDec(): void  {
    if (this.teleopPortTopScore >= 1) {
      this.teleopPortTopScore -= 1;
    }
  }

  public teleopPortBottomScoreInc(): void  {
    this.teleopPortBottomScore += 1;
  }

  public teleopPortBottomScoreDec(): void  {
    if (this.teleopPortBottomScore >= 1) {
      this.teleopPortBottomScore -= 1;
    }
  }

  public recordData(): void {
    // Submit data for storage
    let results = {} as MatchResults;
    results.eventKey = 'TEST';
    results.autoPortBottomScore = this.autoPortBottomScore;
    results.autoPortTopScore = this.autoPortTopScore;
    results.autoPortBottomScore = this.autoPortBottomScore;
    results.teleopPortBottomScore = this.teleopPortBottomScore;
    results.teleopPortTopScore = this.teleopPortTopScore;
    results.teleopPortBottomScore = this.teleopPortBottomScore;

    results.autoLine = this.fgMatch.controls.autoLine.value;
    results.controlPanelColor = this.fgMatch.controls.controlPanelColor.value;
    results.controlPanelRotation = this.fgMatch.controls.controlPanelRotation.value;
    results.groundPickup = this.fgMatch.controls.groundPickup.value;
    results.humanLoadingPort = this.fgMatch.controls.humanLoadingPort.value;
    results.goesUnderControlPanel = this.fgMatch.controls.goesUnderControlPanel.value;
    results.canHang = this.fgMatch.controls.canHang.value;
    results.canMoveOnBar = this.fgMatch.controls.canMoveOnBar.value;
    results.canBuddyHang = this.fgMatch.controls.canBuddyHang.value;

    results.matchNotes = this.fgMatch.controls.matchNotes.value;

    console.log(`JSON data to submit: ${JSON.stringify(results, null, 4)}`);
    this.dataStorage.saveMatch(results).subscribe(
      (success_response) => {
        this.snackBar.open('Match saved', '', {
          duration: 2000,
          verticalPosition: 'top',
        });
      },
      (error_response) => {
        this.snackBar.open('ERROR! That did not work!', '', {
          duration: 5000,
          verticalPosition: 'top',
        });
      }
    );
  }
}
export default ScoutMatchComponent;
