import IconCloud from "./ui/icon-cloud";

const slugs = [
  "c",
  "cplusplus",
  "java",
  "javascript",
  "ruby",
  "python",
  "php",
  "tailwindcss",
  "html5",
  "css3",
  "bootstrap",
  "flutter",
  "dart",
  "rubyonrails",
  "laravel",
  "roboticoperatingsystem",
  "arduino",
  "kicad",
  "aws",
  "firebase",
  "heroku",
  "git",
  "linux",
  "opencv",
  "pandas",
  "scikitlearn",
  "seaborn",
  "matplotlib",
  "postgresql",
  "restapis",
  "mysql",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
];

function IconCloudDemo() {
  return (
    <div className="relative flex items-center justify-center max-w-lg px-20 pt-8 pb-20 overflow-hidden bg-transparent rounded-lg size-full">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;
