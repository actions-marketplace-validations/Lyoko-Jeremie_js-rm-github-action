# Remove File

**R**e**m**oves a given file or folder in a cross-platform way.

Created by Jesse Talavera-Greenberg.

# Installation

Enable local and third-party actions for your repository, then just follow the instructions in Usage.

## Usage

Use this action in any particular step like so:

```yaml
- name: Remove File
  uses: Lyoko-Jeremie/js-rm-github-action@master
  with:
    path: /path/to/something/you/want/to/delete

```

```yaml
- name: Remove File
  uses: Lyoko-Jeremie/js-rm-github-action@master
  with:
    path: |
      /path/to/something/you/want/to/delete1
      /path/to/something/you/want/to/delete2
      /path/to/something/you/want/to/delete3
```

Other useful facts:

- Uses [`io.rmRF`](https://github.com/actions/toolkit/tree/master/packages/io#rm--rf), so it will remove files and directories recursively.
- Succeeds even if the requested path doesn't exist.
- Works on all environments.
- Only supports one path at a time; for multiple paths, use this action multiple times.
- Supports relative and absolute paths, but does *not* support globs or wildcards.
- **Does not protect important system paths.** Be careful if you're using a self-hosted runner.
- Can be used to remove files from your repository within a workflow, but you will have to commit the changes yourself.

## License

MIT.
