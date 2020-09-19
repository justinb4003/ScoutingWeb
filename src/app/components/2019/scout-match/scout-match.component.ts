import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatchResults } from 'src/app/shared/models/2019/match-results.model';
import { DataStorageService } from 'src/app/shared/services/2019/data-storage.service';

@Component({
  selector: 'app-scout-match',
  templateUrl: './scout-match.component.html',
  styleUrls: ['./scout-match.component.scss'],
})
export class ScoutMatchComponent implements OnInit {

  public highGoalScore: number = 0;

  public lowGoalScore: number = 0;

  public fgMatch: FormGroup = new FormGroup({
    matchNotes: new FormControl('', Validators.required),
  });

  constructor(private dataStorage: DataStorageService) { }

  public ngOnInit(): void {
  }

  public highGoalInc(): void  {
    this.highGoalScore += 1;
  }

  public highGoalDec(): void  {
    if (this.highGoalScore >= 1) {
      this.highGoalScore -= 1;
    }
  }

  public lowGoalInc(): void  {
    this.lowGoalScore += 1;
  }

  public lowGoalDec(): void  {
    if (this.lowGoalScore >= 1) {
      this.lowGoalScore -= 1;
    }
  }

  public recordData(): void {
    // Submit data for storage
    let results = {} as MatchResults;
    results.eventKey = 'TEST';
    results.highGoalScore = this.highGoalScore;
    results.lowGoalScore = this.lowGoalScore;
    results.matchComments = this.fgMatch.controls.matchNotes.value;
    console.log(`JSON data to submit: ${JSON.stringify(results, null, 4)}`);
    this.dataStorage.saveMatch(results).subscribe((r) => {
      alert(r);
    });
  }
}
export default ScoutMatchComponent;
