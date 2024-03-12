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