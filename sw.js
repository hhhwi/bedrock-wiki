if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let t={};const r=s=>l(s,a),u={module:{uri:a},exports:t,require:r};e[a]=Promise.all(n.map((s=>u[s]||r(s)))).then((s=>(i(...s),t)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.md.9982a339.js",revision:null},{url:"assets/404.md.9982a339.lean.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.a5e247ea.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.a5e247ea.lean.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.1207e936.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.1207e936.lean.js",revision:null},{url:"assets/animation-controllers_death-commands.md.8d47b88a.js",revision:null},{url:"assets/animation-controllers_death-commands.md.8d47b88a.lean.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.e1720e21.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.e1720e21.lean.js",revision:null},{url:"assets/animation-controllers_index.md.30755e70.js",revision:null},{url:"assets/animation-controllers_index.md.30755e70.lean.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.ab55dd3c.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.ab55dd3c.lean.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.704a4080.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.704a4080.lean.js",revision:null},{url:"assets/app.e762874a.js",revision:null},{url:"assets/blocks_applying-effects.md.6af068e3.js",revision:null},{url:"assets/blocks_applying-effects.md.6af068e3.lean.js",revision:null},{url:"assets/blocks_avoiding-state-limit.md.2636bbe0.js",revision:null},{url:"assets/blocks_avoiding-state-limit.md.2636bbe0.lean.js",revision:null},{url:"assets/blocks_block-components.md.6765db38.js",revision:null},{url:"assets/blocks_block-components.md.6765db38.lean.js",revision:null},{url:"assets/blocks_block-events.md.7fe8fa7c.js",revision:null},{url:"assets/blocks_block-events.md.7fe8fa7c.lean.js",revision:null},{url:"assets/blocks_block-models.md.a38d34f2.js",revision:null},{url:"assets/blocks_block-models.md.a38d34f2.lean.js",revision:null},{url:"assets/blocks_block-permutations.md.df3093d1.js",revision:null},{url:"assets/blocks_block-permutations.md.df3093d1.lean.js",revision:null},{url:"assets/blocks_block-shapes.md.6f9c045c.js",revision:null},{url:"assets/blocks_block-shapes.md.6f9c045c.lean.js",revision:null},{url:"assets/blocks_block-sounds.md.60b96b8e.js",revision:null},{url:"assets/blocks_block-sounds.md.60b96b8e.lean.js",revision:null},{url:"assets/blocks_block-states.md.ec433fbc.js",revision:null},{url:"assets/blocks_block-states.md.ec433fbc.lean.js",revision:null},{url:"assets/blocks_block-tags.md.79d508ab.js",revision:null},{url:"assets/blocks_block-tags.md.79d508ab.lean.js",revision:null},{url:"assets/blocks_block-texture-variation.md.0bbdb40b.js",revision:null},{url:"assets/blocks_block-texture-variation.md.0bbdb40b.lean.js",revision:null},{url:"assets/blocks_block-traits.md.621f4b27.js",revision:null},{url:"assets/blocks_block-traits.md.621f4b27.lean.js",revision:null},{url:"assets/blocks_blocks-intro.md.2a1658ec.js",revision:null},{url:"assets/blocks_blocks-intro.md.2a1658ec.lean.js",revision:null},{url:"assets/blocks_custom-crops.md.ce2303d7.js",revision:null},{url:"assets/blocks_custom-crops.md.ce2303d7.lean.js",revision:null},{url:"assets/blocks_custom-fluids.md.f6e34c8a.js",revision:null},{url:"assets/blocks_custom-fluids.md.f6e34c8a.lean.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.eb2adbba.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.eb2adbba.lean.js",revision:null},{url:"assets/blocks_custom-glazed-terracotta.md.d2dba7a2.js",revision:null},{url:"assets/blocks_custom-glazed-terracotta.md.d2dba7a2.lean.js",revision:null},{url:"assets/blocks_custom-slabs.md.f6767a90.js",revision:null},{url:"assets/blocks_custom-slabs.md.f6767a90.lean.js",revision:null},{url:"assets/blocks_custom-trapdoors.md.f369a43a.js",revision:null},{url:"assets/blocks_custom-trapdoors.md.f369a43a.lean.js",revision:null},{url:"assets/blocks_custom-trees.md.344dd4d6.js",revision:null},{url:"assets/blocks_custom-trees.md.344dd4d6.lean.js",revision:null},{url:"assets/blocks_fake-blocks.md.9bd2d3c3.js",revision:null},{url:"assets/blocks_fake-blocks.md.9bd2d3c3.lean.js",revision:null},{url:"assets/blocks_flipbook-textures.md.4d2a545a.js",revision:null},{url:"assets/blocks_flipbook-textures.md.4d2a545a.lean.js",revision:null},{url:"assets/blocks_index.md.a7fc88e3.js",revision:null},{url:"assets/blocks_index.md.a7fc88e3.lean.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.0752feae.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.0752feae.lean.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.96a68fa6.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.96a68fa6.lean.js",revision:null},{url:"assets/blocks_precise-interaction.md.9ce76d44.js",revision:null},{url:"assets/blocks_precise-interaction.md.9ce76d44.lean.js",revision:null},{url:"assets/blocks_precise-rotation.md.75586d85.js",revision:null},{url:"assets/blocks_precise-rotation.md.75586d85.lean.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.24c341fd.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.24c341fd.lean.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.4cb0f234.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.4cb0f234.lean.js",revision:null},{url:"assets/chunks/3.035a77e6.js",revision:null},{url:"assets/chunks/4.bf191be1.js",revision:null},{url:"assets/chunks/6.07d6a5aa.js",revision:null},{url:"assets/chunks/AlgoliaSearch.78d15f8c.js",revision:null},{url:"assets/chunks/compound.3f8f82ad.js",revision:null},{url:"assets/chunks/content_log.09e62547.js",revision:null},{url:"assets/chunks/Contributors.43c7adab.js",revision:null},{url:"assets/chunks/gametick.8221204e.js",revision:null},{url:"assets/chunks/settings_2.b0f9bbd3.js",revision:null},{url:"assets/chunks/snippets.5bdbd1d4.js",revision:null},{url:"assets/chunks/structure.a9b5a4fc.js",revision:null},{url:"assets/commands_block-entities.md.1520953b.js",revision:null},{url:"assets/commands_block-entities.md.1520953b.lean.js",revision:null},{url:"assets/commands_block-states.md.96c85d57.js",revision:null},{url:"assets/commands_block-states.md.96c85d57.lean.js",revision:null},{url:"assets/commands_damage.md.de9b2044.js",revision:null},{url:"assets/commands_damage.md.de9b2044.lean.js",revision:null},{url:"assets/commands_entity-counter.md.c877954d.js",revision:null},{url:"assets/commands_entity-counter.md.c877954d.lean.js",revision:null},{url:"assets/commands_index.md.1b0395c1.js",revision:null},{url:"assets/commands_index.md.1b0395c1.lean.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.e00d2b4f.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.e00d2b4f.lean.js",revision:null},{url:"assets/commands_mcfunctions.md.143ce386.js",revision:null},{url:"assets/commands_mcfunctions.md.143ce386.lean.js",revision:null},{url:"assets/commands_nbt-commands.md.00842c3e.js",revision:null},{url:"assets/commands_nbt-commands.md.00842c3e.lean.js",revision:null},{url:"assets/commands_new-execute.md.eaf02e90.js",revision:null},{url:"assets/commands_new-execute.md.eaf02e90.lean.js",revision:null},{url:"assets/commands_on-first-join.md.0e2f92a6.js",revision:null},{url:"assets/commands_on-first-join.md.0e2f92a6.lean.js",revision:null},{url:"assets/commands_on-first-world-load.md.326745e1.js",revision:null},{url:"assets/commands_on-first-world-load.md.326745e1.lean.js",revision:null},{url:"assets/commands_on-player-death.md.9687e5a7.js",revision:null},{url:"assets/commands_on-player-death.md.9687e5a7.lean.js",revision:null},{url:"assets/commands_on-player-join.md.302d8520.js",revision:null},{url:"assets/commands_on-player-join.md.302d8520.lean.js",revision:null},{url:"assets/commands_on-player-leave.md.96b860f9.js",revision:null},{url:"assets/commands_on-player-leave.md.96b860f9.lean.js",revision:null},{url:"assets/commands_on-player-respawn.md.1a0c06db.js",revision:null},{url:"assets/commands_on-player-respawn.md.1a0c06db.lean.js",revision:null},{url:"assets/commands_playsound.md.3fc54949.js",revision:null},{url:"assets/commands_playsound.md.3fc54949.lean.js",revision:null},{url:"assets/commands_relative-coordinates.md.ecf7868e.js",revision:null},{url:"assets/commands_relative-coordinates.md.ecf7868e.lean.js",revision:null},{url:"assets/commands_scoreboard-operations.md.3fbb75ec.js",revision:null},{url:"assets/commands_scoreboard-operations.md.3fbb75ec.lean.js",revision:null},{url:"assets/commands_scoreboard-timers.md.661054b3.js",revision:null},{url:"assets/commands_scoreboard-timers.md.661054b3.lean.js",revision:null},{url:"assets/commands_selectors.md.613b88ed.js",revision:null},{url:"assets/commands_selectors.md.613b88ed.lean.js",revision:null},{url:"assets/commands_tellraw.md.9c4cb462.js",revision:null},{url:"assets/commands_tellraw.md.9c4cb462.lean.js",revision:null},{url:"assets/concepts_contents.md.d3b56d8b.js",revision:null},{url:"assets/concepts_contents.md.d3b56d8b.lean.js",revision:null},{url:"assets/concepts_emojis.md.86c9a0d5.js",revision:null},{url:"assets/concepts_emojis.md.86c9a0d5.lean.js",revision:null},{url:"assets/concepts_index.md.bde095d5.js",revision:null},{url:"assets/concepts_index.md.bde095d5.lean.js",revision:null},{url:"assets/concepts_molang.md.ae78bf08.js",revision:null},{url:"assets/concepts_molang.md.ae78bf08.lean.js",revision:null},{url:"assets/concepts_namespaces.md.67dabd6c.js",revision:null},{url:"assets/concepts_namespaces.md.67dabd6c.lean.js",revision:null},{url:"assets/concepts_overwriting-assets.md.42109e22.js",revision:null},{url:"assets/concepts_overwriting-assets.md.42109e22.lean.js",revision:null},{url:"assets/concepts_shaders.md.c675102d.js",revision:null},{url:"assets/concepts_shaders.md.c675102d.lean.js",revision:null},{url:"assets/concepts_sounds.md.04349a22.js",revision:null},{url:"assets/concepts_sounds.md.04349a22.lean.js",revision:null},{url:"assets/concepts_subpacks.md.d71bfc90.js",revision:null},{url:"assets/concepts_subpacks.md.d71bfc90.lean.js",revision:null},{url:"assets/concepts_text-and-translations.md.cc9a9e4e.js",revision:null},{url:"assets/concepts_text-and-translations.md.cc9a9e4e.lean.js",revision:null},{url:"assets/concepts_textures-list.md.88cab673.js",revision:null},{url:"assets/concepts_textures-list.md.88cab673.lean.js",revision:null},{url:"assets/contribute-how-to.md.292877fd.js",revision:null},{url:"assets/contribute-how-to.md.292877fd.lean.js",revision:null},{url:"assets/contribute-style.md.47a7b9f9.js",revision:null},{url:"assets/contribute-style.md.47a7b9f9.lean.js",revision:null},{url:"assets/contribute.md.670a9fed.js",revision:null},{url:"assets/contribute.md.670a9fed.lean.js",revision:null},{url:"assets/discord.md.6faa8945.js",revision:null},{url:"assets/discord.md.6faa8945.lean.js",revision:null},{url:"assets/documentation_advanced-molang.md.e4cf7235.js",revision:null},{url:"assets/documentation_advanced-molang.md.e4cf7235.lean.js",revision:null},{url:"assets/documentation_creative-categories.md.2d154cde.js",revision:null},{url:"assets/documentation_creative-categories.md.2d154cde.lean.js",revision:null},{url:"assets/documentation_file-types.md.74db797f.js",revision:null},{url:"assets/documentation_file-types.md.74db797f.lean.js",revision:null},{url:"assets/documentation_fog-ids.md.b97fb03a.js",revision:null},{url:"assets/documentation_fog-ids.md.b97fb03a.lean.js",revision:null},{url:"assets/documentation_index.md.1c2a7d3d.js",revision:null},{url:"assets/documentation_index.md.1c2a7d3d.lean.js",revision:null},{url:"assets/documentation_material-config-description.md.a6d0cc76.js",revision:null},{url:"assets/documentation_material-config-description.md.a6d0cc76.lean.js",revision:null},{url:"assets/documentation_materials.md.8e52ded4.js",revision:null},{url:"assets/documentation_materials.md.8e52ded4.lean.js",revision:null},{url:"assets/documentation_pack-structure.md.b4a689e5.js",revision:null},{url:"assets/documentation_pack-structure.md.b4a689e5.lean.js",revision:null},{url:"assets/documentation_projectiles.md.703b2e3c.js",revision:null},{url:"assets/documentation_projectiles.md.703b2e3c.lean.js",revision:null},{url:"assets/documentation_queries.md.6fea1aec.js",revision:null},{url:"assets/documentation_queries.md.6fea1aec.lean.js",revision:null},{url:"assets/documentation_shared-constructs.md.1eecc1cc.js",revision:null},{url:"assets/documentation_shared-constructs.md.1eecc1cc.lean.js",revision:null},{url:"assets/documentation_sound-definitions.md.664f7f6a.js",revision:null},{url:"assets/documentation_sound-definitions.md.664f7f6a.lean.js",revision:null},{url:"assets/entities_boat-entities.md.6a0d219e.js",revision:null},{url:"assets/entities_boat-entities.md.6a0d219e.lean.js",revision:null},{url:"assets/entities_detecting-other-entities.md.f718900a.js",revision:null},{url:"assets/entities_detecting-other-entities.md.f718900a.lean.js",revision:null},{url:"assets/entities_disabling-team-damage.md.d2db896c.js",revision:null},{url:"assets/entities_disabling-team-damage.md.d2db896c.lean.js",revision:null},{url:"assets/entities_dummy-components.md.9c0948b4.js",revision:null},{url:"assets/entities_dummy-components.md.9c0948b4.lean.js",revision:null},{url:"assets/entities_dummy-entities.md.4685e129.js",revision:null},{url:"assets/entities_dummy-entities.md.4685e129.lean.js",revision:null},{url:"assets/entities_entity-attack.md.955adfcc.js",revision:null},{url:"assets/entities_entity-attack.md.955adfcc.lean.js",revision:null},{url:"assets/entities_entity-events.md.4ada0e93.js",revision:null},{url:"assets/entities_entity-events.md.4ada0e93.lean.js",revision:null},{url:"assets/entities_entity-holds-item.md.9c5bd5dd.js",revision:null},{url:"assets/entities_entity-holds-item.md.9c5bd5dd.lean.js",revision:null},{url:"assets/entities_entity-intro-bp.md.c48a86f3.js",revision:null},{url:"assets/entities_entity-intro-bp.md.c48a86f3.lean.js",revision:null},{url:"assets/entities_entity-intro-rp.md.8cb72966.js",revision:null},{url:"assets/entities_entity-intro-rp.md.8cb72966.lean.js",revision:null},{url:"assets/entities_entity-movement.md.3fdc8f3e.js",revision:null},{url:"assets/entities_entity-movement.md.3fdc8f3e.lean.js",revision:null},{url:"assets/entities_entity-properties.md.772cbe23.js",revision:null},{url:"assets/entities_entity-properties.md.772cbe23.lean.js",revision:null},{url:"assets/entities_flying-entities.md.aad19f4f.js",revision:null},{url:"assets/entities_flying-entities.md.aad19f4f.lean.js",revision:null},{url:"assets/entities_index.md.520b6f45.js",revision:null},{url:"assets/entities_index.md.520b6f45.lean.js",revision:null},{url:"assets/entities_introduction-to-aec.md.e5def54f.js",revision:null},{url:"assets/entities_introduction-to-aec.md.e5def54f.lean.js",revision:null},{url:"assets/entities_invulnerable-entities.md.94ddc75a.js",revision:null},{url:"assets/entities_invulnerable-entities.md.94ddc75a.lean.js",revision:null},{url:"assets/entities_look-at-entity.md.35ad256a.js",revision:null},{url:"assets/entities_look-at-entity.md.35ad256a.lean.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.76bc4f82.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.76bc4f82.lean.js",revision:null},{url:"assets/entities_npc-dialogs.md.f20ebed6.js",revision:null},{url:"assets/entities_npc-dialogs.md.f20ebed6.lean.js",revision:null},{url:"assets/entities_render-controllers.md.705a8c6e.js",revision:null},{url:"assets/entities_render-controllers.md.705a8c6e.lean.js",revision:null},{url:"assets/entities_runtime-identifier.md.5a0304cb.js",revision:null},{url:"assets/entities_runtime-identifier.md.5a0304cb.lean.js",revision:null},{url:"assets/entities_sleeping-entities.md.9fdadf15.js",revision:null},{url:"assets/entities_sleeping-entities.md.9fdadf15.lean.js",revision:null},{url:"assets/entities_solid-entities.md.9f2f4e55.js",revision:null},{url:"assets/entities_solid-entities.md.9f2f4e55.lean.js",revision:null},{url:"assets/entities_spawn-rules.md.88c77ebf.js",revision:null},{url:"assets/entities_spawn-rules.md.88c77ebf.lean.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.122ecb7e.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.122ecb7e.lean.js",revision:null},{url:"assets/entities_timers.md.83cbcf14.js",revision:null},{url:"assets/entities_timers.md.83cbcf14.lean.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.05b5d07f.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.05b5d07f.lean.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.e7d768b8.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.e7d768b8.lean.js",revision:null},{url:"assets/entities_village-mechanic.md.b31264cb.js",revision:null},{url:"assets/entities_village-mechanic.md.b31264cb.lean.js",revision:null},{url:"assets/entities_vuc-full.md.eab240b5.lean.js",revision:null},{url:"assets/entities_vusr-full.md.13253f68.js",revision:null},{url:"assets/entities_vusr-full.md.13253f68.lean.js",revision:null},{url:"assets/graph-test.md.a9b91ba5.js",revision:null},{url:"assets/graph-test.md.a9b91ba5.lean.js",revision:null},{url:"assets/guide_addons.md.af661001.js",revision:null},{url:"assets/guide_addons.md.af661001.lean.js",revision:null},{url:"assets/guide_advancedmanifest.md.63f93ea1.js",revision:null},{url:"assets/guide_advancedmanifest.md.63f93ea1.lean.js",revision:null},{url:"assets/guide_blockbench.md.c944cd3c.js",revision:null},{url:"assets/guide_blockbench.md.c944cd3c.lean.js",revision:null},{url:"assets/guide_custom-entity.md.7fc3455a.js",revision:null},{url:"assets/guide_custom-entity.md.7fc3455a.lean.js",revision:null},{url:"assets/guide_custom-item.md.49713ec8.js",revision:null},{url:"assets/guide_custom-item.md.49713ec8.lean.js",revision:null},{url:"assets/guide_download-packs.md.a8527cbe.js",revision:null},{url:"assets/guide_download-packs.md.a8527cbe.lean.js",revision:null},{url:"assets/guide_format-version.md.694d783c.js",revision:null},{url:"assets/guide_format-version.md.694d783c.lean.js",revision:null},{url:"assets/guide_index.md.ad72f5bd.js",revision:null},{url:"assets/guide_index.md.ad72f5bd.lean.js",revision:null},{url:"assets/guide_introduction.md.426ffd4f.js",revision:null},{url:"assets/guide_introduction.md.426ffd4f.lean.js",revision:null},{url:"assets/guide_loot-table.md.51214133.js",revision:null},{url:"assets/guide_loot-table.md.51214133.lean.js",revision:null},{url:"assets/guide_project-setup-android.md.56da3710.js",revision:null},{url:"assets/guide_project-setup-android.md.56da3710.lean.js",revision:null},{url:"assets/guide_project-setup.md.7822febc.js",revision:null},{url:"assets/guide_project-setup.md.7822febc.lean.js",revision:null},{url:"assets/guide_software-preparation.md.24bf31ec.js",revision:null},{url:"assets/guide_software-preparation.md.24bf31ec.lean.js",revision:null},{url:"assets/guide_troubleshooting.md.76a332c0.js",revision:null},{url:"assets/guide_troubleshooting.md.76a332c0.lean.js",revision:null},{url:"assets/guide_understanding-json.md.ae156744.js",revision:null},{url:"assets/guide_understanding-json.md.ae156744.lean.js",revision:null},{url:"assets/hacktoberfest.md.ef8d8dd4.js",revision:null},{url:"assets/hacktoberfest.md.ef8d8dd4.lean.js",revision:null},{url:"assets/index.md.044ee812.js",revision:null},{url:"assets/index.md.044ee812.lean.js",revision:null},{url:"assets/items_attachables.md.e99fbb2d.js",revision:null},{url:"assets/items_attachables.md.e99fbb2d.lean.js",revision:null},{url:"assets/items_custom-armor.md.257141f1.js",revision:null},{url:"assets/items_custom-armor.md.257141f1.lean.js",revision:null},{url:"assets/items_custom-weapon.md.ae0eccfa.js",revision:null},{url:"assets/items_custom-weapon.md.ae0eccfa.lean.js",revision:null},{url:"assets/items_enchantments.md.d1884164.js",revision:null},{url:"assets/items_enchantments.md.d1884164.lean.js",revision:null},{url:"assets/items_equipped-item-commands.md.83d48143.js",revision:null},{url:"assets/items_equipped-item-commands.md.83d48143.lean.js",revision:null},{url:"assets/items_index.md.47d46a46.js",revision:null},{url:"assets/items_index.md.47d46a46.lean.js",revision:null},{url:"assets/items_item-components.md.3e386dad.js",revision:null},{url:"assets/items_item-components.md.3e386dad.lean.js",revision:null},{url:"assets/items_item-identifiers.md.94c3fe01.js",revision:null},{url:"assets/items_item-identifiers.md.94c3fe01.lean.js",revision:null},{url:"assets/items_item-tags.md.b97a734e.js",revision:null},{url:"assets/items_item-tags.md.b97a734e.lean.js",revision:null},{url:"assets/items_items-intro.md.4964c7b4.js",revision:null},{url:"assets/items_items-intro.md.4964c7b4.lean.js",revision:null},{url:"assets/items_numerical-item-ids.md.fc65bdf6.js",revision:null},{url:"assets/items_numerical-item-ids.md.fc65bdf6.lean.js",revision:null},{url:"assets/items_spawning-items.md.a3173df3.js",revision:null},{url:"assets/items_spawning-items.md.a3173df3.lean.js",revision:null},{url:"assets/items_spear.md.bb7c6403.js",revision:null},{url:"assets/items_spear.md.bb7c6403.lean.js",revision:null},{url:"assets/items_throwable.md.86332f80.js",revision:null},{url:"assets/items_throwable.md.86332f80.lean.js",revision:null},{url:"assets/items_tool-durability.md.59437b75.js",revision:null},{url:"assets/items_tool-durability.md.59437b75.lean.js",revision:null},{url:"assets/items_troubleshooting-items.md.c4072079.js",revision:null},{url:"assets/items_troubleshooting-items.md.c4072079.lean.js",revision:null},{url:"assets/items_vanilla-usage-items.md.37ce9027.js",revision:null},{url:"assets/items_vanilla-usage-items.md.37ce9027.lean.js",revision:null},{url:"assets/items_vui-full.md.78f8589f.js",revision:null},{url:"assets/items_vui-full.md.78f8589f.lean.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.d4c0b812.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.d4c0b812.lean.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.4911e962.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.4911e962.lean.js",revision:null},{url:"assets/json-ui_best-practices.md.0e669c8b.js",revision:null},{url:"assets/json-ui_best-practices.md.0e669c8b.lean.js",revision:null},{url:"assets/json-ui_index.md.ee340d1d.js",revision:null},{url:"assets/json-ui_index.md.ee340d1d.lean.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.11fb20af.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.11fb20af.lean.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.e93c9c05.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.e93c9c05.lean.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.fdb7d7ff.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.fdb7d7ff.lean.js",revision:null},{url:"assets/json-ui_string-to-number.md.45908e3e.js",revision:null},{url:"assets/json-ui_string-to-number.md.45908e3e.lean.js",revision:null},{url:"assets/loot_index.md.ed770803.js",revision:null},{url:"assets/loot_index.md.ed770803.lean.js",revision:null},{url:"assets/loot_item-functions.md.cc44ffa3.js",revision:null},{url:"assets/loot_item-functions.md.cc44ffa3.lean.js",revision:null},{url:"assets/loot_loot-tables.md.859c8adb.js",revision:null},{url:"assets/loot_loot-tables.md.859c8adb.lean.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.cea23b37.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.cea23b37.lean.js",revision:null},{url:"assets/loot_recipes.md.b8187b68.js",revision:null},{url:"assets/loot_recipes.md.b8187b68.lean.js",revision:null},{url:"assets/loot_trade-tables.md.24d62f15.js",revision:null},{url:"assets/loot_trade-tables.md.24d62f15.lean.js",revision:null},{url:"assets/loot_trading-behavior.md.f5898a09.js",revision:null},{url:"assets/loot_trading-behavior.md.f5898a09.lean.js",revision:null},{url:"assets/meta_addon-performance.md.f735709a.js",revision:null},{url:"assets/meta_addon-performance.md.f735709a.lean.js",revision:null},{url:"assets/meta_index.md.372ffc4b.js",revision:null},{url:"assets/meta_index.md.372ffc4b.lean.js",revision:null},{url:"assets/meta_jq.md.02f32119.js",revision:null},{url:"assets/meta_jq.md.02f32119.lean.js",revision:null},{url:"assets/meta_style-guide.md.22507281.js",revision:null},{url:"assets/meta_style-guide.md.22507281.lean.js",revision:null},{url:"assets/meta_useful-links.md.61b5cc85.js",revision:null},{url:"assets/meta_useful-links.md.61b5cc85.lean.js",revision:null},{url:"assets/meta_using-schemas.md.042a5534.js",revision:null},{url:"assets/meta_using-schemas.md.042a5534.lean.js",revision:null},{url:"assets/meta_version-control.md.08b9275a.js",revision:null},{url:"assets/meta_version-control.md.08b9275a.lean.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.08378c8b.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.08378c8b.lean.js",revision:null},{url:"assets/nbt_index.md.ad48c722.js",revision:null},{url:"assets/nbt_index.md.ad48c722.lean.js",revision:null},{url:"assets/nbt_mcstructure.md.768eeac5.js",revision:null},{url:"assets/nbt_mcstructure.md.768eeac5.lean.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.733dd68d.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.733dd68d.lean.js",revision:null},{url:"assets/nbt_step-by-step-example.md.64e1aaff.js",revision:null},{url:"assets/nbt_step-by-step-example.md.64e1aaff.lean.js",revision:null},{url:"assets/nbt_structure-limits.md.51e18320.js",revision:null},{url:"assets/nbt_structure-limits.md.51e18320.lean.js",revision:null},{url:"assets/particles_disabling-particles.md.885b4e12.js",revision:null},{url:"assets/particles_disabling-particles.md.885b4e12.lean.js",revision:null},{url:"assets/particles_index.md.b9b99328.js",revision:null},{url:"assets/particles_index.md.b9b99328.lean.js",revision:null},{url:"assets/particles_particles-and-sounds.md.b4b9057f.js",revision:null},{url:"assets/particles_particles-and-sounds.md.b4b9057f.lean.js",revision:null},{url:"assets/particles_particles.md.0c96759e.js",revision:null},{url:"assets/particles_particles.md.0c96759e.lean.js",revision:null},{url:"assets/particles_vanilla-particles.md.1ee0c79b.js",revision:null},{url:"assets/particles_vanilla-particles.md.1ee0c79b.lean.js",revision:null},{url:"assets/privacy.md.cf37f56f.js",revision:null},{url:"assets/privacy.md.cf37f56f.lean.js",revision:null},{url:"assets/scripting_api-environment.md.79de1bbb.js",revision:null},{url:"assets/scripting_api-environment.md.79de1bbb.lean.js",revision:null},{url:"assets/scripting_custom-command.md.c653c021.js",revision:null},{url:"assets/scripting_custom-command.md.c653c021.lean.js",revision:null},{url:"assets/scripting_game-tests.md.3d4f0f65.js",revision:null},{url:"assets/scripting_game-tests.md.3d4f0f65.lean.js",revision:null},{url:"assets/scripting_gametest-form.md.a92a6a55.js",revision:null},{url:"assets/scripting_gametest-form.md.a92a6a55.lean.js",revision:null},{url:"assets/scripting_gametest-qna.md.2683ee23.js",revision:null},{url:"assets/scripting_gametest-qna.md.2683ee23.lean.js",revision:null},{url:"assets/scripting_index.md.cd5be12f.js",revision:null},{url:"assets/scripting_index.md.cd5be12f.lean.js",revision:null},{url:"assets/scripting_placement-prevention.md.482413fd.js",revision:null},{url:"assets/scripting_placement-prevention.md.482413fd.lean.js",revision:null},{url:"assets/scripting_resources.md.93a3fe5f.js",revision:null},{url:"assets/scripting_resources.md.93a3fe5f.lean.js",revision:null},{url:"assets/scripting_saving-loading.md.3dc8a4a8.js",revision:null},{url:"assets/scripting_saving-loading.md.3dc8a4a8.lean.js",revision:null},{url:"assets/scripting_script-modules.md.2514c2f5.js",revision:null},{url:"assets/scripting_script-modules.md.2514c2f5.lean.js",revision:null},{url:"assets/scripting_script-net.md.ca32e9e6.js",revision:null},{url:"assets/scripting_script-net.md.ca32e9e6.lean.js",revision:null},{url:"assets/scripting_script-server.md.fe2a8e4d.js",revision:null},{url:"assets/scripting_script-server.md.fe2a8e4d.lean.js",revision:null},{url:"assets/scripting_script-watchdog.md.abdb9a74.js",revision:null},{url:"assets/scripting_script-watchdog.md.abdb9a74.lean.js",revision:null},{url:"assets/scripting_scripting-editor-qna.md.f58f7d01.js",revision:null},{url:"assets/scripting_scripting-editor-qna.md.f58f7d01.lean.js",revision:null},{url:"assets/scripting_scripting-intro.md.b27bf194.js",revision:null},{url:"assets/scripting_scripting-intro.md.b27bf194.lean.js",revision:null},{url:"assets/scripting_starting-scripts.md.66b25d92.js",revision:null},{url:"assets/scripting_starting-scripts.md.66b25d92.lean.js",revision:null},{url:"assets/scripting_troubleshooting.md.8a5d4e91.js",revision:null},{url:"assets/scripting_troubleshooting.md.8a5d4e91.lean.js",revision:null},{url:"assets/scripting_typescript.md.9414a566.js",revision:null},{url:"assets/scripting_typescript.md.9414a566.lean.js",revision:null},{url:"assets/scripting_what-is-script.md.df15ecb7.js",revision:null},{url:"assets/scripting_what-is-script.md.df15ecb7.lean.js",revision:null},{url:"assets/servers_index.md.bbf67e0b.js",revision:null},{url:"assets/servers_index.md.bbf67e0b.lean.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.8f1b8edc.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.8f1b8edc.lean.js",revision:null},{url:"assets/servers_server-software.md.3dfcfef8.js",revision:null},{url:"assets/servers_server-software.md.3dfcfef8.lean.js",revision:null},{url:"assets/style.4753e9c0.css",revision:null},{url:"assets/test.md.96942c83.js",revision:null},{url:"assets/test.md.96942c83.lean.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.e1f556aa.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.e1f556aa.lean.js",revision:null},{url:"assets/visuals_animation-effects.md.099451f5.js",revision:null},{url:"assets/visuals_animation-effects.md.099451f5.lean.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.ffa70961.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.ffa70961.lean.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.31db8561.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.31db8561.lean.js",revision:null},{url:"assets/visuals_death-animations.md.829d8d2e.js",revision:null},{url:"assets/visuals_death-animations.md.829d8d2e.lean.js",revision:null},{url:"assets/visuals_deferred-qna.md.c659c5a6.js",revision:null},{url:"assets/visuals_deferred-qna.md.c659c5a6.lean.js",revision:null},{url:"assets/visuals_glowing-texture.md.71b90784.js",revision:null},{url:"assets/visuals_glowing-texture.md.71b90784.lean.js",revision:null},{url:"assets/visuals_index.md.7d14ae86.js",revision:null},{url:"assets/visuals_index.md.7d14ae86.lean.js",revision:null},{url:"assets/visuals_introduction.md.6b800aea.js",revision:null},{url:"assets/visuals_introduction.md.6b800aea.lean.js",revision:null},{url:"assets/visuals_leash-position.md.575427ee.js",revision:null},{url:"assets/visuals_leash-position.md.575427ee.lean.js",revision:null},{url:"assets/visuals_material-creations.md.e2e14e61.js",revision:null},{url:"assets/visuals_material-creations.md.e2e14e61.lean.js",revision:null},{url:"assets/visuals_materials.md.5f1c8be3.js",revision:null},{url:"assets/visuals_materials.md.5f1c8be3.lean.js",revision:null},{url:"assets/visuals_math-based-animations.md.891a023f.js",revision:null},{url:"assets/visuals_math-based-animations.md.891a023f.lean.js",revision:null},{url:"assets/visuals_player-geometry.md.f240a930.js",revision:null},{url:"assets/visuals_player-geometry.md.f240a930.lean.js",revision:null},{url:"assets/visuals_remove-shadows.md.e4f658a4.js",revision:null},{url:"assets/visuals_remove-shadows.md.e4f658a4.lean.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.8c7c2d62.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.8c7c2d62.lean.js",revision:null},{url:"assets/visuals_structure-presentation.md.b1f7819a.js",revision:null},{url:"assets/visuals_structure-presentation.md.b1f7819a.lean.js",revision:null},{url:"assets/vr_editing-your-first-model.md.30c49cde.js",revision:null},{url:"assets/vr_editing-your-first-model.md.30c49cde.lean.js",revision:null},{url:"assets/vr_index.md.7f8f2c1a.js",revision:null},{url:"assets/vr_index.md.7f8f2c1a.lean.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.bda153e5.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.bda153e5.lean.js",revision:null},{url:"assets/vr_pack_setup.md.e8399994.js",revision:null},{url:"assets/vr_pack_setup.md.e8399994.lean.js",revision:null},{url:"assets/world-generation_biome-tags.md.078209c7.js",revision:null},{url:"assets/world-generation_biome-tags.md.078209c7.lean.js",revision:null},{url:"assets/world-generation_biomes.md.54975459.js",revision:null},{url:"assets/world-generation_biomes.md.54975459.lean.js",revision:null},{url:"assets/world-generation_custom-ores.md.c65ae0e5.js",revision:null},{url:"assets/world-generation_custom-ores.md.c65ae0e5.lean.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.54745ae9.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.54745ae9.lean.js",revision:null},{url:"assets/world-generation_feature-types.md.84639c98.js",revision:null},{url:"assets/world-generation_feature-types.md.84639c98.lean.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.57f5f5cf.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.57f5f5cf.lean.js",revision:null},{url:"assets/world-generation_index.md.2493e62a.js",revision:null},{url:"assets/world-generation_index.md.2493e62a.lean.js",revision:null},{url:"assets/world-generation_structure-features.md.488fea8d.js",revision:null},{url:"assets/world-generation_structure-features.md.488fea8d.lean.js",revision:null},{url:"assets/world-generation_surface-builder.md.1ebf2d03.js",revision:null},{url:"assets/world-generation_surface-builder.md.1ebf2d03.lean.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.787fa30f.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.787fa30f.lean.js",revision:null},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/images/favicons/android-chrome-192x192.png",revision:"1fb5ac37a9c926d44d9377dffdb866ec"},{url:"assets/images/favicons/android-chrome-256x256.png",revision:"7403912a35eebe25b54355dfd27106af"},{url:"manifest.webmanifest",revision:"c5a08b36b4610e940947bce83726f2a1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
