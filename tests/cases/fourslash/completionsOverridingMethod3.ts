/// <reference path="fourslash.ts" />

// @newline: LF
// @Filename: boo.d.ts
// Case: Declaration files
////interface Ghost {
////    boo(): string;
////}
////
////declare class Poltergeist implements Ghost {
////    /*b*/
////}


verify.completions({
    marker: "b",
    isNewIdentifierLocation: true,
    preferences: {
        includeCompletionsWithInsertText: true,
        includeCompletionsWithSnippetText: false,
        includeCompletionsWithClassMemberSnippets: true,
    },
    includes: [
        {
            name: "boo",
            sortText: completion.SortText.LocationPriority,
            replacementSpan: {
                fileName: "",
                pos: 0,
                end: 0,
            },
            insertText:
"boo(): string;\n",
        }
    ],
});