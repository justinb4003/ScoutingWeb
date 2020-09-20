export interface MatchResults {
  eventKey: string;
  autoPortInnerScore: number;
  autoPortTopScore: number;
  autoPortBottomScore: number;
  teleopPortInnerScore: number;
  teleopPortTopScore: number;
  teleopPortBottomScore: number;
  autoLine: boolean;
  controlPanelColor: boolean;
  controlPanelRotation: boolean;
  groundPickup: boolean;
  humanLoadingPort: boolean;
  goesUnderControlPanel: boolean;
  canHang: boolean;
  canMoveOnBar: boolean;
  canBuddyHang: boolean;
  matchNotes: string;
}
