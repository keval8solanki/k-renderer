echo "Building.."
yarn build
echo "Built ✅"

echo "Publishing to npm.."
npm version patch
npm publish
echo "Published ✅"

echo "Pushing to git.."
git add .
git commit -m "Update"
git push -u origin master
echo "Pushed ✅"