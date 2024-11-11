import { Section } from "./components/Section";
import { Card } from "./components/ui/Card/Card";
import { Button } from "./components/ui/Button/Button";
import { ComponentDisplay } from "./components/ComponentDisplay";

export default function HomePage() {
  return (
    <>
      <Section variant="secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card variant="tertiary" title="Windows 95 UI Kit">
              <p className="text-w95-base mb-4">
                Tired of all the new design trends? Fly back in time and use
                this free <em>Windows 95 User Interface Kit</em> to create
                awesome retro websites.
              </p>
              <div className="text-center">
                <Button
                  variant="primary"
                  bordered
                  onClick={() =>
                    window.open(
                      "https://themesberg.com/product/ui-kit/windows-95-ui-kit",
                    )
                  }
                >
                  Free download
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Buttons Section */}
      <Section>
        <div className="container mx-auto px-4">
          <h4 className="mb-5">Buttons</h4>

          <ComponentDisplay
            title="Basic Buttons"
            code={`
<button class="btn mr-2 mb-2 btn-primary">
    <span class="btn-text">Primary</span>
</button>
<button class="btn mr-2 mb-2 btn-primary border-dark">
    <span class="btn-text">Bordered</span>
</button>
<button class="btn mr-2 mb-2 btn-primary border-dark-lg">
    <span class="btn-text">Bordered 2</span>
</button>
            `}
          >
            <div className="flex flex-wrap gap-2">
              <Button>Primary</Button>
              <Button bordered>Bordered</Button>
              <Button borderedLg>Bordered 2</Button>
            </div>
          </ComponentDisplay>

          <h6 className="text-gray-600 my-5">Color Variations</h6>
          <ComponentDisplay
            code={`
<button class="btn mr-2 mb-2 btn-primary">Primary</button>
<button class="btn mr-2 mb-2 btn-secondary">Secondary</button>
<button class="btn mr-2 mb-2 btn-tertiary">Tertiary</button>
            `}
          >
            <div className="flex flex-wrap gap-2">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="tertiary">Tertiary</Button>
              <Button variant="info">Info</Button>
              <Button variant="success">Success</Button>
              <Button variant="warning">Warning</Button>
              <Button variant="danger">Danger</Button>
            </div>
          </ComponentDisplay>

          <h6 className="text-gray-600 my-5">Sizes</h6>
          <ComponentDisplay
            code={`
<button class="btn btn-sm">Small</button>
<button class="btn">Regular</button>
<button class="btn btn-lg">Large</button>
            `}
          >
            <div className="flex flex-wrap items-center gap-2">
              <Button size="sm">Small</Button>
              <Button>Regular</Button>
              <Button size="lg">Large</Button>
            </div>
          </ComponentDisplay>

          <h6 className="text-gray-600 my-5">Icon Buttons</h6>
          <ComponentDisplay
            code={`
<button class="btn">
    <span class="btn-text">📺 Start</span>
</button>
            `}
          >
            <div className="flex flex-wrap gap-2">
              <Button icon="📺">Start</Button>
              <Button icon="⌨">Keyboard</Button>
              <Button icon="💣">Bomberman</Button>
              <Button icon="🖨">Print</Button>
              <Button icon="🔒">Locked</Button>
            </div>
          </ComponentDisplay>
        </div>
      </Section>

      {/* Forms Section */}
      <Section>
        <div className="container mx-auto px-4">
          <h4 className="mb-5">Forms</h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <form className="space-y-4">
                <div className="form-group">
                  <label className="mr-3">Default:</label>
                  <input type="text" className="form-control w-3/4" />
                </div>
                <div className="form-group">
                  <label className="mr-3">Disabled:</label>
                  <input type="text" className="form-control w-3/4" disabled />
                </div>
                <div className="form-group">
                  <label className="mr-3">Success:</label>
                  <input type="text" className="form-control is-valid w-3/4" />
                </div>
                <div className="form-group">
                  <label className="mr-3">Error:</label>
                  <input
                    type="text"
                    className="form-control is-invalid w-3/4"
                  />
                </div>
                <div className="form-group">
                  <label className="mr-3">Textarea:</label>
                  <textarea className="form-control w-3/4" rows={4}></textarea>
                </div>
                <div className="flex justify-end space-x-2">
                  <Button bordered>Submit</Button>
                  <Button>Cancel</Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
