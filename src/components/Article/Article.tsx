export type ArticleProps = {
  title: string;
  text: string[];
  tags: string;
  image: string;
  alt: string;
};

const Article = ({ title, text, tags, image, alt }: ArticleProps) => {
  return (
    <div className="p-5 bg-gray-200 dark:bg-dark-200 sm:rounded-xl sm:shadow-lg flex flex-col items-center">
      <h3 className="text-xl text-alura-200 dark:text-gray-200 font-bold">
        {title}
      </h3>
      <div className="grid gap-1">
        {text.map((content, index) => (
          <p className="text-alura-200 dark:text-gray-400" key={index}>
            {content}
          </p>
        ))}
      </div>
      {image && <img className="sm:p-4" src={image} />}
      {image && alt && <span className="sr-only">{alt}</span>}
    </div>
  );
};

export default Article;
