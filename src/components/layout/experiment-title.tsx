interface ExperimentTitleProps {
  title: string;
  description: string;
}

const ExperimentTitle = ({ title, description }: ExperimentTitleProps) => {
  return (
    <section className="mb-10 block">
      <h1 className="mb-4 text-balance text-xl font-bold">{title}</h1>
      <p className="text-balance text-slate-900 md:w-3/4 lg:w-2/3">
        {description}
      </p>
    </section>
  );
};

export default ExperimentTitle;
