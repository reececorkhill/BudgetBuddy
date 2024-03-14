# Git commands

Usefull list of commands in Git

## Resolve conflics

### Bring all changes from remote to local
Before to do any merge, check if there is any change in remote, by running next command
```
git fetch origin
```

### Switch to your soure branch
For example if I want to integrate my changes from **development** to **main**, first I need to 
select development by running next command
```
git checkout development
```

### Save your changes before merge
Now add all your local changes and push in your branch
```
git add .
git commit -m "Some message about what your changes are for"
git push
```

### merge your loca with remote branch
This action is secure, what you will do is merge your local branch with remote branch but in your laptop
so, there is not issue you can create to break anything in remote, the commands for that are

```
git merge origin/main
```

### Conflicts
If you are changing some files that other people have change, you will see in your code mark as red those files
but also you will see strange symbols, example

index.js
```
...

var b = "example";
<<<HEAD
var a = "some value";
=================
>>>>>2e767c11bdbd539ace501...
var a = "other value";
<<<<HEAD

...
```
what you need to tdo there is, choose the value you want and delete the other, in our case we will delet the line 
of "other value" so our file index.js will be

```
...

var b = "example";
var a = "some value";

...
```

### Save conflicts fixed
now just add another commit and push in your branch
```
git add .
git commit -m "Confict fixed in index.js"
git push
```
whenever the team will merge your branch will not be any conflict


## Multiple Git accounts

### How to configure multiple git or bitbucket accounts
Official doc:
https://support.atlassian.com/bitbucket-cloud/docs/managing-multiple-bitbucket-user-ssh-keys-on-one-device/

Go to ~/.ssh
```
cd ~/.ssh
```

There create your ssh following next example
```
ssh-keygen -t ed25519 -b 4096 -C "<username@emaildomain.com>" -f <ssh-key-name>


# example 
ssh-keygen -t ed25519 -b 4096 -C "frank.lapa@itexp.co.uk" -f id_github_bootcamp
```


Add the credentials to ssh config
```
ssh-add ~/{ssh-key-name}
```

clone a repository using specific account
```
git clone git@github.com-{username}:{workspace}/{repo}.git

#example
git clone git@github.com-reececorkhill:reececorkhill/BudgetBuddy.git
```


Update url, if you already have cloned the repo
```
git remote set-url origin git@github.com-{bitbucket_username}:{workspace}/{repo}.git

#example
git remote set-url origin git@github.com-reececorkhill:reececorkhill/BudgetBuddy.git
```
