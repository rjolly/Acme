mkdir("build");
mkdir("build/classes");

javac("src", "build/classes");

jar("Acme.jar", "build/classes");
