# Mirror Group repo in personal

## Reason of mirroring
To deploy in Netfly I need to have the repo in my github account, as I'm in the testing phase,
to accelerate the project, I have decided to mirror our repo into my personal accout so I can use it
for deployment propose, once is fixed I can work with the team to create the group account and deploy 
with the group account

## Commands

### clone mirror mode
if you have single account
```
git clone --mirror git@github.com:reececorkhill/BudgetBuddy.git
```

If you use multiple git accounts
```
git clone --mirror git@github.com-reececorkhill:reececorkhill/BudgetBuddy.git
```

### Create mirror repo
Crate an empty repository without README file

### Set target as mirror

now you will have a directory.git, go in
```
cd BudgetBuddy.git
```
with single account push mirror
```
git push --mirror git@github.com:efcanchari/BudgetBuddy.git
```

with multiple accounts push mirror
```
git push --mirror git@github.com-efcanchari:efcanchari/BudgetBuddy.git
```
### Sync manually
Run next command to get all changes
```
git fetch -p origin
```

run next command to push all changes
```
git push --mirror
```