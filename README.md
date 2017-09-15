# preprocess-cli-tool
A command-line tool for [preprocess](https://github.com/jsoverson/preprocess).

## Installation
```
npm install preprocess-cli-tool
```

## Usage
```
Usage: preprocess -f <source> -d <destination> [--option <argument>]...

Options:
  -h, --help      Show help                                            [boolean]
  -f, --srcFile   The source file to be processed            [string] [required]
  -d, --destFile  The file to be output after processing     [string] [required]
  -c, --context   Context JSON object that includes variables found in the
                  source                                                [string]
  -t, --type      Type of file to process             [string] [default: "html"]
  -v, --version   Show version number                                  [boolean]
```
## Getting Started
The basic way to get started is to just include a source file and a destination file. Both are required to succesfully process a file.
```
preprocess -f path/to/source.html -d path/to/destination.html
```

### File Types
The default type of processing is set to `html`. There is no reason to explicitly set the type if you are processing html files. If you are working with other types such as CSS or JavaScript, you can set the type as follows:
```
preprocess -f path/to/in-file.css -d path/to/out-file.css -t js
```
The `js` type will process both CSS or JavaScript as described by preprocess. Please refer to [preprocess's documentation](https://github.com/jsoverson/preprocess#optionstype) for the full list of file types supported.

### Context
The default context is set to `process.env`. If you wish to use your own context object, you can set it as follows:
```
preprocess -f path/to/in-file.html -d path/to/out-file.html -c '{ "DEBUG": true }'
```
**Make sure that your object is a valid JSON object and that you wrap it with single quotes.**

## License
Released under the MIT license

Copyright (c) 2017 Moises Baez
