import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PollRoutingModule } from './poll-routing.module';
import { PollComponent } from './poll.component';
import { AngulatorPollModule } from '../components/angulator-poll-components/angulator-poll.module';

@NgModule({
  declarations: [PollComponent],
  imports: [CommonModule, PollRoutingModule, AngulatorPollModule]
})
export class PollModule {}
