#/bin/sh

for file in *.js; do
    mv "$file" "$(basename "$file" .js).tsx"
done