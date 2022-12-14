<script>
import { mapState } from 'vuex'
import { menuItems } from './horizontal-menu'

/**
 * Horiontal-navbar component
 */
export default {
  data() {
    return {
      menuItems,
    }
  },
  computed: mapState(['layout']),
  props: {
    type: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      required: true,
    },
    menu: {
      type: String,
      required: true,
    },
  },
  watch: {
    type: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case 'dark':
              document.body.setAttribute('data-topbar-color', 'dark')
              break
            case 'light':
              document.body.setAttribute('data-topbar-color', 'light')
              break
            default:
              document.body.setAttribute('data-topbar-color', 'dark')
              break
          }
        }
      },
    },
    width: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case 'boxed':
              document.body.setAttribute('data-layout-width', 'boxed')
              break
            case 'fluid':
              document.body.setAttribute('data-layout-mode', 'horizontal')
              document.body.removeAttribute('data-layout-width')
              break
            default:
              document.body.setAttribute('data-layout-mode', 'fluid')
              break
          }
        }
      },
    },
    menu: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case 'fixed':
              document.body.setAttribute('data-layout-menu-position', 'fixed')
              break
            case 'scrollable':
              document.body.setAttribute(
                'data-layout-menu-position',
                'scrollable'
              )
              break
            default:
              document.body.setAttribute('data-layout-menu-position', 'fixed')
              break
          }
        }
      },
    },
  },
  mounted() {
    this.activateParentDropdown()

    this.$router.afterEach((routeTo, routeFrom) => {
      this.activateParentDropdown()
    })
  },
  methods: {
    activateParentDropdown() {
      const resetParent = (el) => {
        const parent = el.parentElement
        if (parent) {
          parent.classList.remove('active')
          const parent2 = parent.parentElement
          if (parent2) {
            parent2.classList.remove('active')
            const parent3 = parent2.parentElement
            parent3.classList.remove('show')
            if (parent3) {
              parent3.classList.remove('active')
              const parent4 = parent3.parentElement
              if (parent4) {
                parent4.classList.remove('active')
                const parent5 = parent4.parentElement
                if (parent5) {
                  parent5.classList.remove('active')
                }
              }
            }
          }
        }
      }
      const links = document.getElementsByClassName('side-nav-link-ref')
      let matchingMenuItem = null
      for (let i = 0; i < links.length; i++) {
        // reset menu
        resetParent(links[i])
      }
      for (let i = 0; i < links.length; i++) {
        if (window.location.pathname === links[i].pathname) {
          matchingMenuItem = links[i]
          break
        }
      }
      if (matchingMenuItem) {
        matchingMenuItem.classList.add('active')
        const parent = matchingMenuItem.parentElement
        if (parent) {
          parent.classList.add('active')
          const parent2 = parent.parentElement
          if (parent2) {
            parent2.classList.add('active')
            const parent3 = parent2.parentElement
            if (parent3) {
              parent3.classList.add('active')
              const parent4 = parent3.parentElement
              if (parent4) {
                parent4.classList.add('active')
                const parent5 = parent4.parentElement
                if (parent5) {
                  parent5.classList.add('active')
                }
              }
            }
          }
        }
      }
    },
    /**
     * Returns true or false if given menu item has child or not
     * @param item menuItem
     */
    hasItems(item) {
      return item.subItems !== undefined ? item.subItems.length > 0 : false
    },
    /**
     * Menu clicked show the submenu
     */
    onMenuClick(event) {
      event.preventDefault()
      const nextEl = event.target.nextSibling
      const isHorizontal = document
        .getElementById('wrapper')
        .hasAttribute('layout')
      if (isHorizontal) {
        nextEl.parentElement.classList.add('show')
        nextEl.nextSibling.classList.add('show')
      } else if (
        nextEl &&
        nextEl.classList &&
        !nextEl.classList.contains('show')
      ) {
        const parentEl = event.target.parentNode
        if (parentEl) {
          parentEl.classList.remove('show')
        }
        nextEl.classList.add('show')
      } else if (nextEl && nextEl.classList) {
        nextEl.classList.remove('show')
      }
      return false
    },
  },
}
</script>

<template>
  <div>
    <div class="topnav">
      <div class="container-fluid">
        <nav class="navbar navbar-light navbar-expand-lg topnav-menu">
          <div id="topnav-menu-content" class="collapse navbar-collapse">
            <ul class="navbar-nav">
              <li
                v-for="(item, index) of menuItems"
                :key="index"
                class="nav-item dropdown"
              >
                <nuxt-link
                  v-if="!item.subItems"
                  tag="a"
                  :to="item.link"
                  class="nav-link dropdown-toggle arrow-none side-nav-link-ref"
                >
                  <i :class="`${item.icon} mr-1`"></i>
                  {{ $t(item.label) }}
                </nuxt-link>

                <a
                  v-if="item.subItems"
                  id="topnav-components"
                  class="nav-link dropdown-toggle arrow-none"
                  href="javascript: void(0);"
                  role="button"
                  @click="onMenuClick"
                >
                  <i :class="`${item.icon} mr-1`"></i>
                  {{ $t(item.label) }}
                  <div class="arrow-down"></div>
                </a>
                <div
                  v-if="hasItems(item)"
                  class="dropdown-menu row"
                  aria-labelledby="topnav-dashboard"
                >
                  <template v-for="(subitem, index) of item.subItems">
                    <nuxt-link
                      v-if="!hasItems(subitem)"
                      :key="index"
                      class="col dropdown-item side-nav-link-ref"
                      :to="subitem.link"
                      >{{ $t(subitem.label) }}</nuxt-link
                    >
                    <div v-if="hasItems(subitem)" :key="index" class="dropdown">
                      <a
                        class="dropdown-item dropdown-toggle"
                        href="javascript: void(0);"
                        @click="onMenuClick"
                      >
                        {{ $t(subitem.label) }}
                        <div class="arrow-down"></div>
                      </a>
                      <div class="dropdown-menu">
                        <nuxt-link
                          v-for="(subSubitem, index) of subitem.subItems"
                          :key="index"
                          :to="subSubitem.link"
                          class="dropdown-item side-nav-link-ref"
                          >{{ $t(subSubitem.label) }}</nuxt-link
                        >
                      </div>
                    </div>
                  </template>
                </div>
              </li>
            </ul>
            <!-- end navbar-->
          </div>
          <!-- end .collapsed-->
        </nav>
      </div>
      <!-- end container-fluid -->
    </div>
    <!-- end topnav-->
  </div>
</template>
