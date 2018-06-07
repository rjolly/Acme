mkdir("build");
mkdir("build/classes");

javac("src", "build/classes");

mkdir("dist");
jar("dist/Acme.jar", "build/classes");

publish("dist")
