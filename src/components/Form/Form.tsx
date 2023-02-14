type FormProps = {
  onSubmit: any;
};

const Form = ({ onSubmit }: FormProps) => {
  const safeSubmit = (event: any) => {
    event.preventDefault();
    event.stopPropagation();

    const name = event.target[0].value;
    const email = event.target[1].value;

    onSubmit({ name, email });
  };

  return (
    <form
      className="mx-5 -mt-20 flex h-full flex-col items-center justify-center gap-10"
      onSubmit={safeSubmit}
    >
      <input
        className="alura-input"
        type="text"
        required
        placeholder="Nome..."
      />
      <input
        className="alura-input"
        type="email"
        required
        placeholder="Email..."
      />
      <button
        className="w-full
        max-w-sm
        rounded-full
        bg-alura-100
        py-1
        px-5
        uppercase
        text-gray-200
        outline-none
        hover:animate-pulse
        hover:shadow-md
        hover:shadow-gray-500
        dark:bg-dark-200
        hover:dark:shadow-black"
        type="submit"
      >
        Seguir
      </button>
    </form>
  );
};

export default Form;
