;; Directory local variables
;; For more information see (info "(emacs) Directory Variables")

((auto-mode-alist . (("\\.mdx\\'" . markdown-mode)))
 (markdown-mode . ((fill-column . 80)
                   (eval . (prettier-js-mode 1))))
 (typescript-mode . ((typescript-indent-level . 2))))
