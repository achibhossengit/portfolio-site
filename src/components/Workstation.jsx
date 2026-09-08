const SpecList = ({ items }) => (
  <ul className="m-0 mt-2 flex list-none flex-col gap-1.5 p-0 font-mono text-sm leading-relaxed">
    {items.map(({ label, value }) => (
      <li key={label}>
        <span className="mr-1.5 text-primary" aria-hidden="true">
          &gt;
        </span>
        <span className="font-medium text-base-content/90">{label}:</span>{" "}
        <span className="text-base-content/70">{value}</span>
      </li>
    ))}
  </ul>
);

const Workstation = () => (
  <section className="scroll-mt-20" id="workstation">
    <h3 className="mt-10 text-center text-2xl font-semibold uppercase text-base-content/90">
      Workstation
    </h3>
    <div className="mt-5 grid items-start gap-8 md:grid-cols-[minmax(0,1fr)_19rem]">
      <figure className="group order-2 mx-auto w-full max-w-[19rem] pb-4 pr-4 md:mx-0">
        <div className="relative">
          <div
            className="pointer-events-none absolute inset-0 translate-x-2 translate-y-2 rounded-md border border-primary transition-transform duration-300 ease-portfolio group-hover:translate-x-3 group-hover:translate-y-3 motion-reduce:transform-none"
            aria-hidden="true"
          />
          <img
            src="/workstation/images/workstation.jpg"
            alt="Desktop workstation with dual monitors"
            className="relative aspect-[19/10] w-full rounded-md border border-base-content/20 object-cover saturate-[.72] transition duration-300 ease-portfolio group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:saturate-100 group-hover:shadow-lift motion-reduce:transform-none"
          />
          <span
            className="pointer-events-none absolute inset-0 rounded-md bg-primary opacity-20 mix-blend-color transition duration-300 ease-portfolio group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:opacity-0 motion-reduce:transform-none"
            aria-hidden="true"
          />
        </div>
      </figure>
      <div className="order-1 flex flex-col gap-6">
        <div>
          <h4 className="m-0 text-base font-semibold text-base-content/90">Primary — Desktop</h4>
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
          <h4 className="m-0 text-base font-semibold text-base-content/90">
            Secondary — Lenovo Slim 3
          </h4>
          <SpecList
            items={[
              { label: "Processor", value: "Intel Core i3" },
              { label: "RAM", value: "4 GB" },
              { label: "OS", value: "Linux Mint" },
            ]}
          />
        </div>
      </div>
    </div>
  </section>
);

export default Workstation;
