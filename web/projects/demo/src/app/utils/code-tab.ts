import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-tabs',
  template: `
    <div class="sample-code">
      <clr-tabs>
        <clr-tab>
          <button clrTabLink id="link1">Code</button>
          <clr-tab-content id="content1" *clrIfActive>
            <pre><code>{{ code }}</code></pre>
          </clr-tab-content>
        </clr-tab>
        <clr-tab>
          <button clrTabLink>JSON</button>
          <clr-tab-content *clrIfActive>
            <pre><code>{{ json }}</code></pre>
          </clr-tab-content>
        </clr-tab>
      </clr-tabs>
    </div>
  `,
})
export class CodeTabsComponent {
  @Input() code: string;
  @Input() json: string;
}
