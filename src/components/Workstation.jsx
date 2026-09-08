import Divider from "@/components/Divider";
import workstationImage from "@/assets/workstation.jpg";

const SpecList = ({ items }) => (
  <ul className="m-0 mt-2 flex list-none flex-col gap-1.5 p-0 font-mono text-sm leading-relaxed">
    {items.map(({ label, value }) => (
      <li key={label}>
        <span className="mr-1.5 text-primary" aria-hidden="true">
          &gt;
        </span>
        <span className="font-medium text-base-content">{label}:</span>{" "}
        <span className="text-base-content/70">{value}</span>
      </li>
    ))}
  </ul>
);

const Workstation = () => (
  <section className="scroll-mt-20" id="workstation">
    <Divider label="Workstation" />
    <figure className="w-full max-w-sm pb-2 pr-2">
      <div className="relative">
        <div
          className="pointer-events-none absolute inset-0 translate-x-2 translate-y-2 rounded-md border border-primary"
          aria-hidden="true"
        />
        <img
          src={workstationImage}
          alt="Desktop workstation with dual monitors"
          className="relative w-full rounded-md border border-base-content/20 object-cover"
        />
      </div>
    </figure>
    <div className="mt-8 grid grid-cols-1 items-start gap-6 sm:grid-cols-2">
      <div>
        <h3 className="m-0 text-base font-semibold">Primary — Desktop</h3>
        <SpecList
          items={[
            { label: "Processor", value: "AMD Ryzen 7 5700G" },
            { label: "RAM", value: "16 GB DDR4" },
            { label: "Storage", value: "256 GB NVMe SSD + 256 GB portable NVMe SSD" },
            { label: "Graphics", value: "AMD Radeon (integrated)" },
            { label: "OS", value: "Windows 11 Pro" },
            { label: "Displays", value: "Dual monitors" },
            { label: "Tablet", value: "VEIKK A50" },
            { label: "Microphone", value: "Boya BY-M1 lavalier" },
          ]}
        />
      </div>
      <div>
        <h3 className="m-0 text-base font-semibold">Secondary — Lenovo Slim 3</h3>
        <SpecList
          items={[
            { label: "Processor", value: "Intel Core i3" },
            { label: "RAM", value: "4 GB" },
            { label: "OS", value: "Linux Mint" },
          ]}
        />
      </div>
    </div>
  </section>
);

export default Workstation;
