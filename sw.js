if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const t=s||("document"in self?document.currentScript.src:"")||location.href;if(e[t])return;let a={};const r=s=>l(s,t),u={module:{uri:t},exports:a,require:r};e[t]=Promise.all(n.map((s=>u[s]||r(s)))).then((s=>(i(...s),a)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.md.130f9e0d.js",revision:null},{url:"assets/404.md.130f9e0d.lean.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.6b6f2416.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.6b6f2416.lean.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.406a7e2c.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.406a7e2c.lean.js",revision:null},{url:"assets/animation-controllers_death-commands.md.16dccbe7.js",revision:null},{url:"assets/animation-controllers_death-commands.md.16dccbe7.lean.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.71001925.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.71001925.lean.js",revision:null},{url:"assets/animation-controllers_index.md.922b36ff.js",revision:null},{url:"assets/animation-controllers_index.md.922b36ff.lean.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.ad7f8012.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.ad7f8012.lean.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.32bea681.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.32bea681.lean.js",revision:null},{url:"assets/app.08d8d98d.js",revision:null},{url:"assets/blocks_applying-effects.md.d3102955.js",revision:null},{url:"assets/blocks_applying-effects.md.d3102955.lean.js",revision:null},{url:"assets/blocks_avoiding-state-limit.md.fcbaf219.js",revision:null},{url:"assets/blocks_avoiding-state-limit.md.fcbaf219.lean.js",revision:null},{url:"assets/blocks_block-components.md.b515e4be.js",revision:null},{url:"assets/blocks_block-components.md.b515e4be.lean.js",revision:null},{url:"assets/blocks_block-culling.md.6f2cce2f.js",revision:null},{url:"assets/blocks_block-culling.md.6f2cce2f.lean.js",revision:null},{url:"assets/blocks_block-events.md.003b89fe.js",revision:null},{url:"assets/blocks_block-events.md.003b89fe.lean.js",revision:null},{url:"assets/blocks_block-models.md.22d5da7a.js",revision:null},{url:"assets/blocks_block-models.md.22d5da7a.lean.js",revision:null},{url:"assets/blocks_block-permutations.md.f9793f16.js",revision:null},{url:"assets/blocks_block-permutations.md.f9793f16.lean.js",revision:null},{url:"assets/blocks_block-shapes.md.822215f5.js",revision:null},{url:"assets/blocks_block-shapes.md.822215f5.lean.js",revision:null},{url:"assets/blocks_block-sounds.md.9e7f5699.js",revision:null},{url:"assets/blocks_block-sounds.md.9e7f5699.lean.js",revision:null},{url:"assets/blocks_block-states.md.1d2e1cfa.js",revision:null},{url:"assets/blocks_block-states.md.1d2e1cfa.lean.js",revision:null},{url:"assets/blocks_block-tags.md.81fb72c4.js",revision:null},{url:"assets/blocks_block-tags.md.81fb72c4.lean.js",revision:null},{url:"assets/blocks_block-texture-variation.md.b065678f.js",revision:null},{url:"assets/blocks_block-texture-variation.md.b065678f.lean.js",revision:null},{url:"assets/blocks_block-traits.md.14ac3257.js",revision:null},{url:"assets/blocks_block-traits.md.14ac3257.lean.js",revision:null},{url:"assets/blocks_blocks-intro.md.7d6c72c1.js",revision:null},{url:"assets/blocks_blocks-intro.md.7d6c72c1.lean.js",revision:null},{url:"assets/blocks_custom-crops.md.6693e55b.js",revision:null},{url:"assets/blocks_custom-crops.md.6693e55b.lean.js",revision:null},{url:"assets/blocks_custom-fluids.md.cf1d858d.js",revision:null},{url:"assets/blocks_custom-fluids.md.cf1d858d.lean.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.523e055a.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.523e055a.lean.js",revision:null},{url:"assets/blocks_custom-glazed-terracotta.md.6fd2c57d.js",revision:null},{url:"assets/blocks_custom-glazed-terracotta.md.6fd2c57d.lean.js",revision:null},{url:"assets/blocks_custom-slabs.md.2aa585a6.js",revision:null},{url:"assets/blocks_custom-slabs.md.2aa585a6.lean.js",revision:null},{url:"assets/blocks_custom-trapdoors.md.d96d7f83.js",revision:null},{url:"assets/blocks_custom-trapdoors.md.d96d7f83.lean.js",revision:null},{url:"assets/blocks_custom-trees.md.db9a355e.js",revision:null},{url:"assets/blocks_custom-trees.md.db9a355e.lean.js",revision:null},{url:"assets/blocks_fake-blocks.md.2c5a70f2.js",revision:null},{url:"assets/blocks_fake-blocks.md.2c5a70f2.lean.js",revision:null},{url:"assets/blocks_flipbook-textures.md.4dedf6de.js",revision:null},{url:"assets/blocks_flipbook-textures.md.4dedf6de.lean.js",revision:null},{url:"assets/blocks_index.md.0bf7287d.js",revision:null},{url:"assets/blocks_index.md.0bf7287d.lean.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.cff20ae6.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.cff20ae6.lean.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.314178e2.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.314178e2.lean.js",revision:null},{url:"assets/blocks_precise-interaction.md.6a48bdcc.js",revision:null},{url:"assets/blocks_precise-interaction.md.6a48bdcc.lean.js",revision:null},{url:"assets/blocks_precise-rotation.md.854ac2a1.js",revision:null},{url:"assets/blocks_precise-rotation.md.854ac2a1.lean.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.14fc5ba1.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.14fc5ba1.lean.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.c6f31642.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.c6f31642.lean.js",revision:null},{url:"assets/chunks/3.035a77e6.js",revision:null},{url:"assets/chunks/4.bf191be1.js",revision:null},{url:"assets/chunks/6.07d6a5aa.js",revision:null},{url:"assets/chunks/AlgoliaSearch.852e0855.js",revision:null},{url:"assets/chunks/compound.3f8f82ad.js",revision:null},{url:"assets/chunks/content_log.09e62547.js",revision:null},{url:"assets/chunks/Contributors.aea2d835.js",revision:null},{url:"assets/chunks/gametick.8221204e.js",revision:null},{url:"assets/chunks/settings_2.b0f9bbd3.js",revision:null},{url:"assets/chunks/snippets.5bdbd1d4.js",revision:null},{url:"assets/chunks/structure.a9b5a4fc.js",revision:null},{url:"assets/commands_block-entities.md.e108f0d3.js",revision:null},{url:"assets/commands_block-entities.md.e108f0d3.lean.js",revision:null},{url:"assets/commands_block-states.md.85be6a0d.js",revision:null},{url:"assets/commands_block-states.md.85be6a0d.lean.js",revision:null},{url:"assets/commands_damage.md.e8eef518.js",revision:null},{url:"assets/commands_damage.md.e8eef518.lean.js",revision:null},{url:"assets/commands_entity-counter.md.69948431.js",revision:null},{url:"assets/commands_entity-counter.md.69948431.lean.js",revision:null},{url:"assets/commands_index.md.538d8cb3.js",revision:null},{url:"assets/commands_index.md.538d8cb3.lean.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.57e45b45.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.57e45b45.lean.js",revision:null},{url:"assets/commands_logic-gates.md.89e6f269.js",revision:null},{url:"assets/commands_logic-gates.md.89e6f269.lean.js",revision:null},{url:"assets/commands_mcfunctions.md.953a4d1f.js",revision:null},{url:"assets/commands_mcfunctions.md.953a4d1f.lean.js",revision:null},{url:"assets/commands_nbt-commands.md.49ef7852.js",revision:null},{url:"assets/commands_nbt-commands.md.49ef7852.lean.js",revision:null},{url:"assets/commands_new-execute.md.2a77de19.js",revision:null},{url:"assets/commands_new-execute.md.2a77de19.lean.js",revision:null},{url:"assets/commands_on-first-join.md.c39d65b1.js",revision:null},{url:"assets/commands_on-first-join.md.c39d65b1.lean.js",revision:null},{url:"assets/commands_on-first-world-load.md.be760373.js",revision:null},{url:"assets/commands_on-first-world-load.md.be760373.lean.js",revision:null},{url:"assets/commands_on-player-death.md.9e9dc415.js",revision:null},{url:"assets/commands_on-player-death.md.9e9dc415.lean.js",revision:null},{url:"assets/commands_on-player-join.md.58da381f.js",revision:null},{url:"assets/commands_on-player-join.md.58da381f.lean.js",revision:null},{url:"assets/commands_on-player-leave.md.f8538904.js",revision:null},{url:"assets/commands_on-player-leave.md.f8538904.lean.js",revision:null},{url:"assets/commands_on-player-respawn.md.86468949.js",revision:null},{url:"assets/commands_on-player-respawn.md.86468949.lean.js",revision:null},{url:"assets/commands_orbital-camera.md.0ba11024.js",revision:null},{url:"assets/commands_orbital-camera.md.0ba11024.lean.js",revision:null},{url:"assets/commands_playsound.md.2c3569c0.js",revision:null},{url:"assets/commands_playsound.md.2c3569c0.lean.js",revision:null},{url:"assets/commands_relative-coordinates.md.7f2b101f.js",revision:null},{url:"assets/commands_relative-coordinates.md.7f2b101f.lean.js",revision:null},{url:"assets/commands_scoreboard-operations.md.cc744e62.js",revision:null},{url:"assets/commands_scoreboard-operations.md.cc744e62.lean.js",revision:null},{url:"assets/commands_scoreboard-timers.md.d812051f.js",revision:null},{url:"assets/commands_scoreboard-timers.md.d812051f.lean.js",revision:null},{url:"assets/commands_selectors.md.5fe57c42.js",revision:null},{url:"assets/commands_selectors.md.5fe57c42.lean.js",revision:null},{url:"assets/commands_tellraw.md.379d4eef.js",revision:null},{url:"assets/commands_tellraw.md.379d4eef.lean.js",revision:null},{url:"assets/concepts_contents.md.429e68f0.js",revision:null},{url:"assets/concepts_contents.md.429e68f0.lean.js",revision:null},{url:"assets/concepts_emojis.md.f87e0c68.js",revision:null},{url:"assets/concepts_emojis.md.f87e0c68.lean.js",revision:null},{url:"assets/concepts_index.md.11dcdfc2.js",revision:null},{url:"assets/concepts_index.md.11dcdfc2.lean.js",revision:null},{url:"assets/concepts_molang.md.31e1974b.js",revision:null},{url:"assets/concepts_molang.md.31e1974b.lean.js",revision:null},{url:"assets/concepts_namespaces.md.f4d7db7a.js",revision:null},{url:"assets/concepts_namespaces.md.f4d7db7a.lean.js",revision:null},{url:"assets/concepts_overwriting-assets.md.c89d6c7c.js",revision:null},{url:"assets/concepts_overwriting-assets.md.c89d6c7c.lean.js",revision:null},{url:"assets/concepts_shaders.md.f043b149.js",revision:null},{url:"assets/concepts_shaders.md.f043b149.lean.js",revision:null},{url:"assets/concepts_sounds.md.4bb43638.js",revision:null},{url:"assets/concepts_sounds.md.4bb43638.lean.js",revision:null},{url:"assets/concepts_subpacks.md.d85e7fb1.js",revision:null},{url:"assets/concepts_subpacks.md.d85e7fb1.lean.js",revision:null},{url:"assets/concepts_text-and-translations.md.97aa627b.js",revision:null},{url:"assets/concepts_text-and-translations.md.97aa627b.lean.js",revision:null},{url:"assets/concepts_textures-list.md.d4854ff1.js",revision:null},{url:"assets/concepts_textures-list.md.d4854ff1.lean.js",revision:null},{url:"assets/contribute-how-to.md.760378b5.js",revision:null},{url:"assets/contribute-how-to.md.760378b5.lean.js",revision:null},{url:"assets/contribute-style.md.783113ec.js",revision:null},{url:"assets/contribute-style.md.783113ec.lean.js",revision:null},{url:"assets/contribute.md.01234eb9.js",revision:null},{url:"assets/contribute.md.01234eb9.lean.js",revision:null},{url:"assets/discord.md.333ba88b.js",revision:null},{url:"assets/discord.md.333ba88b.lean.js",revision:null},{url:"assets/documentation_advanced-molang.md.fa9ef15f.js",revision:null},{url:"assets/documentation_advanced-molang.md.fa9ef15f.lean.js",revision:null},{url:"assets/documentation_creative-categories.md.8a0f9b81.js",revision:null},{url:"assets/documentation_creative-categories.md.8a0f9b81.lean.js",revision:null},{url:"assets/documentation_file-types.md.ab72498f.js",revision:null},{url:"assets/documentation_file-types.md.ab72498f.lean.js",revision:null},{url:"assets/documentation_fog-ids.md.98b38b05.js",revision:null},{url:"assets/documentation_fog-ids.md.98b38b05.lean.js",revision:null},{url:"assets/documentation_index.md.9306f744.js",revision:null},{url:"assets/documentation_index.md.9306f744.lean.js",revision:null},{url:"assets/documentation_material-config-description.md.f16546ba.js",revision:null},{url:"assets/documentation_material-config-description.md.f16546ba.lean.js",revision:null},{url:"assets/documentation_materials.md.fec733b9.js",revision:null},{url:"assets/documentation_materials.md.fec733b9.lean.js",revision:null},{url:"assets/documentation_pack-structure.md.a4f6a628.js",revision:null},{url:"assets/documentation_pack-structure.md.a4f6a628.lean.js",revision:null},{url:"assets/documentation_projectiles.md.d996b705.js",revision:null},{url:"assets/documentation_projectiles.md.d996b705.lean.js",revision:null},{url:"assets/documentation_queries.md.7169b87d.js",revision:null},{url:"assets/documentation_queries.md.7169b87d.lean.js",revision:null},{url:"assets/documentation_shared-constructs.md.00ca5788.js",revision:null},{url:"assets/documentation_shared-constructs.md.00ca5788.lean.js",revision:null},{url:"assets/documentation_sound-definitions.md.b5b76509.js",revision:null},{url:"assets/documentation_sound-definitions.md.b5b76509.lean.js",revision:null},{url:"assets/entities_boat-entities.md.76b3c272.js",revision:null},{url:"assets/entities_boat-entities.md.76b3c272.lean.js",revision:null},{url:"assets/entities_detecting-other-entities.md.57357887.js",revision:null},{url:"assets/entities_detecting-other-entities.md.57357887.lean.js",revision:null},{url:"assets/entities_disabling-team-damage.md.4780119e.js",revision:null},{url:"assets/entities_disabling-team-damage.md.4780119e.lean.js",revision:null},{url:"assets/entities_dummy-components.md.ddccc439.js",revision:null},{url:"assets/entities_dummy-components.md.ddccc439.lean.js",revision:null},{url:"assets/entities_dummy-entities.md.feecd47e.js",revision:null},{url:"assets/entities_dummy-entities.md.feecd47e.lean.js",revision:null},{url:"assets/entities_entity-attack.md.c5245cec.js",revision:null},{url:"assets/entities_entity-attack.md.c5245cec.lean.js",revision:null},{url:"assets/entities_entity-events.md.8e2806e2.js",revision:null},{url:"assets/entities_entity-events.md.8e2806e2.lean.js",revision:null},{url:"assets/entities_entity-holds-item.md.d16a0a09.js",revision:null},{url:"assets/entities_entity-holds-item.md.d16a0a09.lean.js",revision:null},{url:"assets/entities_entity-intro-bp.md.74fcdd76.js",revision:null},{url:"assets/entities_entity-intro-bp.md.74fcdd76.lean.js",revision:null},{url:"assets/entities_entity-intro-rp.md.1356ff05.js",revision:null},{url:"assets/entities_entity-intro-rp.md.1356ff05.lean.js",revision:null},{url:"assets/entities_entity-movement.md.ce02677e.js",revision:null},{url:"assets/entities_entity-movement.md.ce02677e.lean.js",revision:null},{url:"assets/entities_entity-properties.md.f435c45c.js",revision:null},{url:"assets/entities_entity-properties.md.f435c45c.lean.js",revision:null},{url:"assets/entities_entity-transforms.md.1cce9dd6.js",revision:null},{url:"assets/entities_entity-transforms.md.1cce9dd6.lean.js",revision:null},{url:"assets/entities_flying-entities.md.c6e49637.js",revision:null},{url:"assets/entities_flying-entities.md.c6e49637.lean.js",revision:null},{url:"assets/entities_index.md.1f7d46c3.js",revision:null},{url:"assets/entities_index.md.1f7d46c3.lean.js",revision:null},{url:"assets/entities_introduction-to-aec.md.7330a5ea.js",revision:null},{url:"assets/entities_introduction-to-aec.md.7330a5ea.lean.js",revision:null},{url:"assets/entities_invulnerable-entities.md.8cd1621c.js",revision:null},{url:"assets/entities_invulnerable-entities.md.8cd1621c.lean.js",revision:null},{url:"assets/entities_look-at-entity.md.6cdb7f34.js",revision:null},{url:"assets/entities_look-at-entity.md.6cdb7f34.lean.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.759d7467.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.759d7467.lean.js",revision:null},{url:"assets/entities_npc-dialogs.md.1974c569.js",revision:null},{url:"assets/entities_npc-dialogs.md.1974c569.lean.js",revision:null},{url:"assets/entities_render-controllers.md.59655ea6.js",revision:null},{url:"assets/entities_render-controllers.md.59655ea6.lean.js",revision:null},{url:"assets/entities_runtime-identifier.md.60b2ac8c.js",revision:null},{url:"assets/entities_runtime-identifier.md.60b2ac8c.lean.js",revision:null},{url:"assets/entities_sleeping-entities.md.a42a9343.js",revision:null},{url:"assets/entities_sleeping-entities.md.a42a9343.lean.js",revision:null},{url:"assets/entities_solid-entities.md.79e6fae7.js",revision:null},{url:"assets/entities_solid-entities.md.79e6fae7.lean.js",revision:null},{url:"assets/entities_spawn-rules.md.357a1692.js",revision:null},{url:"assets/entities_spawn-rules.md.357a1692.lean.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.2ff354c9.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.2ff354c9.lean.js",revision:null},{url:"assets/entities_timers.md.dc55ddb3.js",revision:null},{url:"assets/entities_timers.md.dc55ddb3.lean.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.15d73cb0.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.15d73cb0.lean.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.a48b5ee6.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.a48b5ee6.lean.js",revision:null},{url:"assets/entities_village-mechanic.md.a38595d9.js",revision:null},{url:"assets/entities_village-mechanic.md.a38595d9.lean.js",revision:null},{url:"assets/entities_vuc-full.md.81585ea8.lean.js",revision:null},{url:"assets/entities_vusr-full.md.e4006bc3.js",revision:null},{url:"assets/entities_vusr-full.md.e4006bc3.lean.js",revision:null},{url:"assets/graph-test.md.c5d90a17.js",revision:null},{url:"assets/graph-test.md.c5d90a17.lean.js",revision:null},{url:"assets/guide_addons.md.79b7a406.js",revision:null},{url:"assets/guide_addons.md.79b7a406.lean.js",revision:null},{url:"assets/guide_advancedmanifest.md.69d600d7.js",revision:null},{url:"assets/guide_advancedmanifest.md.69d600d7.lean.js",revision:null},{url:"assets/guide_blockbench.md.5aee1fda.js",revision:null},{url:"assets/guide_blockbench.md.5aee1fda.lean.js",revision:null},{url:"assets/guide_custom-entity.md.b8fc0dbb.js",revision:null},{url:"assets/guide_custom-entity.md.b8fc0dbb.lean.js",revision:null},{url:"assets/guide_custom-item.md.9a71b648.js",revision:null},{url:"assets/guide_custom-item.md.9a71b648.lean.js",revision:null},{url:"assets/guide_download-packs.md.8bfd37c4.js",revision:null},{url:"assets/guide_download-packs.md.8bfd37c4.lean.js",revision:null},{url:"assets/guide_format-version.md.fe1b533e.js",revision:null},{url:"assets/guide_format-version.md.fe1b533e.lean.js",revision:null},{url:"assets/guide_index.md.364f534a.js",revision:null},{url:"assets/guide_index.md.364f534a.lean.js",revision:null},{url:"assets/guide_introduction.md.06bdb3a2.js",revision:null},{url:"assets/guide_introduction.md.06bdb3a2.lean.js",revision:null},{url:"assets/guide_loot-table.md.83a856a7.js",revision:null},{url:"assets/guide_loot-table.md.83a856a7.lean.js",revision:null},{url:"assets/guide_project-setup-android.md.75b9d82b.js",revision:null},{url:"assets/guide_project-setup-android.md.75b9d82b.lean.js",revision:null},{url:"assets/guide_project-setup.md.35efa416.js",revision:null},{url:"assets/guide_project-setup.md.35efa416.lean.js",revision:null},{url:"assets/guide_software-preparation.md.d33a527e.js",revision:null},{url:"assets/guide_software-preparation.md.d33a527e.lean.js",revision:null},{url:"assets/guide_troubleshooting.md.8447b398.js",revision:null},{url:"assets/guide_troubleshooting.md.8447b398.lean.js",revision:null},{url:"assets/guide_understanding-json.md.28d87052.js",revision:null},{url:"assets/guide_understanding-json.md.28d87052.lean.js",revision:null},{url:"assets/hacktoberfest.md.d7efef11.js",revision:null},{url:"assets/hacktoberfest.md.d7efef11.lean.js",revision:null},{url:"assets/index.md.9d86696e.js",revision:null},{url:"assets/index.md.9d86696e.lean.js",revision:null},{url:"assets/items_attachables.md.ff1229ef.js",revision:null},{url:"assets/items_attachables.md.ff1229ef.lean.js",revision:null},{url:"assets/items_custom-armor.md.0254e6a2.js",revision:null},{url:"assets/items_custom-armor.md.0254e6a2.lean.js",revision:null},{url:"assets/items_custom-pottery-sherd.md.90b526ee.js",revision:null},{url:"assets/items_custom-pottery-sherd.md.90b526ee.lean.js",revision:null},{url:"assets/items_custom-weapon.md.9a936dcf.js",revision:null},{url:"assets/items_custom-weapon.md.9a936dcf.lean.js",revision:null},{url:"assets/items_enchantments.md.95d4ae40.js",revision:null},{url:"assets/items_enchantments.md.95d4ae40.lean.js",revision:null},{url:"assets/items_equipped-item-commands.md.702a73f0.js",revision:null},{url:"assets/items_equipped-item-commands.md.702a73f0.lean.js",revision:null},{url:"assets/items_high-resolution-items.md.ac7eb1aa.js",revision:null},{url:"assets/items_high-resolution-items.md.ac7eb1aa.lean.js",revision:null},{url:"assets/items_index.md.ed1c1659.js",revision:null},{url:"assets/items_index.md.ed1c1659.lean.js",revision:null},{url:"assets/items_item-components.md.87e0382d.js",revision:null},{url:"assets/items_item-components.md.87e0382d.lean.js",revision:null},{url:"assets/items_item-identifiers.md.a713fcc2.js",revision:null},{url:"assets/items_item-identifiers.md.a713fcc2.lean.js",revision:null},{url:"assets/items_item-tags.md.f6ca9232.js",revision:null},{url:"assets/items_item-tags.md.f6ca9232.lean.js",revision:null},{url:"assets/items_items-intro.md.0844bd0f.js",revision:null},{url:"assets/items_items-intro.md.0844bd0f.lean.js",revision:null},{url:"assets/items_numerical-item-ids.md.b7182929.js",revision:null},{url:"assets/items_numerical-item-ids.md.b7182929.lean.js",revision:null},{url:"assets/items_spawning-items.md.dd3bfd1d.js",revision:null},{url:"assets/items_spawning-items.md.dd3bfd1d.lean.js",revision:null},{url:"assets/items_spear.md.e374f411.js",revision:null},{url:"assets/items_spear.md.e374f411.lean.js",revision:null},{url:"assets/items_throwable.md.91420a5c.js",revision:null},{url:"assets/items_throwable.md.91420a5c.lean.js",revision:null},{url:"assets/items_tool-durability.md.360dbdda.js",revision:null},{url:"assets/items_tool-durability.md.360dbdda.lean.js",revision:null},{url:"assets/items_troubleshooting-items.md.28152505.js",revision:null},{url:"assets/items_troubleshooting-items.md.28152505.lean.js",revision:null},{url:"assets/items_vanilla-usage-items.md.a8c79d8a.js",revision:null},{url:"assets/items_vanilla-usage-items.md.a8c79d8a.lean.js",revision:null},{url:"assets/items_vui-full.md.792c5c08.js",revision:null},{url:"assets/items_vui-full.md.792c5c08.lean.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.feef4647.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.feef4647.lean.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.33a44454.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.33a44454.lean.js",revision:null},{url:"assets/json-ui_best-practices.md.32fc4cb7.js",revision:null},{url:"assets/json-ui_best-practices.md.32fc4cb7.lean.js",revision:null},{url:"assets/json-ui_custom-buttons.md.4ee73494.js",revision:null},{url:"assets/json-ui_custom-buttons.md.4ee73494.lean.js",revision:null},{url:"assets/json-ui_index.md.e3be1f60.js",revision:null},{url:"assets/json-ui_index.md.e3be1f60.lean.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.f0db7b60.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.f0db7b60.lean.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.5bb371d7.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.5bb371d7.lean.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.97c45f78.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.97c45f78.lean.js",revision:null},{url:"assets/json-ui_string-to-number.md.82cea958.js",revision:null},{url:"assets/json-ui_string-to-number.md.82cea958.lean.js",revision:null},{url:"assets/loot_index.md.d6f881be.js",revision:null},{url:"assets/loot_index.md.d6f881be.lean.js",revision:null},{url:"assets/loot_item-functions.md.5da9402c.js",revision:null},{url:"assets/loot_item-functions.md.5da9402c.lean.js",revision:null},{url:"assets/loot_loot-tables.md.64e2afa2.js",revision:null},{url:"assets/loot_loot-tables.md.64e2afa2.lean.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.4a1b4745.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.4a1b4745.lean.js",revision:null},{url:"assets/loot_recipes.md.15831fa2.js",revision:null},{url:"assets/loot_recipes.md.15831fa2.lean.js",revision:null},{url:"assets/loot_trade-tables.md.b0df6df4.js",revision:null},{url:"assets/loot_trade-tables.md.b0df6df4.lean.js",revision:null},{url:"assets/loot_trading-behavior.md.5bda2fa6.js",revision:null},{url:"assets/loot_trading-behavior.md.5bda2fa6.lean.js",revision:null},{url:"assets/meta_addon-performance.md.2d617e4f.js",revision:null},{url:"assets/meta_addon-performance.md.2d617e4f.lean.js",revision:null},{url:"assets/meta_index.md.f675c98a.js",revision:null},{url:"assets/meta_index.md.f675c98a.lean.js",revision:null},{url:"assets/meta_jq.md.629edb58.js",revision:null},{url:"assets/meta_jq.md.629edb58.lean.js",revision:null},{url:"assets/meta_style-guide.md.8385dfcf.js",revision:null},{url:"assets/meta_style-guide.md.8385dfcf.lean.js",revision:null},{url:"assets/meta_useful-links.md.44c586a5.js",revision:null},{url:"assets/meta_useful-links.md.44c586a5.lean.js",revision:null},{url:"assets/meta_using-schemas.md.9e863170.js",revision:null},{url:"assets/meta_using-schemas.md.9e863170.lean.js",revision:null},{url:"assets/meta_version-control.md.394d5e86.js",revision:null},{url:"assets/meta_version-control.md.394d5e86.lean.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.ca9b0a40.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.ca9b0a40.lean.js",revision:null},{url:"assets/nbt_index.md.76ecb1c5.js",revision:null},{url:"assets/nbt_index.md.76ecb1c5.lean.js",revision:null},{url:"assets/nbt_mcstructure.md.9baddb9a.js",revision:null},{url:"assets/nbt_mcstructure.md.9baddb9a.lean.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.b7276d55.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.b7276d55.lean.js",revision:null},{url:"assets/nbt_step-by-step-example.md.8c37a077.js",revision:null},{url:"assets/nbt_step-by-step-example.md.8c37a077.lean.js",revision:null},{url:"assets/nbt_structure-limits.md.f6982023.js",revision:null},{url:"assets/nbt_structure-limits.md.f6982023.lean.js",revision:null},{url:"assets/particles_disabling-particles.md.a1eaba6f.js",revision:null},{url:"assets/particles_disabling-particles.md.a1eaba6f.lean.js",revision:null},{url:"assets/particles_index.md.3f9005e4.js",revision:null},{url:"assets/particles_index.md.3f9005e4.lean.js",revision:null},{url:"assets/particles_particles-and-sounds.md.7ca54425.js",revision:null},{url:"assets/particles_particles-and-sounds.md.7ca54425.lean.js",revision:null},{url:"assets/particles_particles.md.5355b45c.js",revision:null},{url:"assets/particles_particles.md.5355b45c.lean.js",revision:null},{url:"assets/particles_vanilla-particles.md.56b6ca7f.js",revision:null},{url:"assets/particles_vanilla-particles.md.56b6ca7f.lean.js",revision:null},{url:"assets/privacy.md.6e4562fd.js",revision:null},{url:"assets/privacy.md.6e4562fd.lean.js",revision:null},{url:"assets/scripting_api-environment.md.36af8fb2.js",revision:null},{url:"assets/scripting_api-environment.md.36af8fb2.lean.js",revision:null},{url:"assets/scripting_custom-command.md.a0c2a08f.js",revision:null},{url:"assets/scripting_custom-command.md.a0c2a08f.lean.js",revision:null},{url:"assets/scripting_game-tests.md.6698f345.js",revision:null},{url:"assets/scripting_game-tests.md.6698f345.lean.js",revision:null},{url:"assets/scripting_gametest-form.md.9c6ce57b.js",revision:null},{url:"assets/scripting_gametest-form.md.9c6ce57b.lean.js",revision:null},{url:"assets/scripting_gametest-qna.md.6e2dc4b7.js",revision:null},{url:"assets/scripting_gametest-qna.md.6e2dc4b7.lean.js",revision:null},{url:"assets/scripting_index.md.beb48015.js",revision:null},{url:"assets/scripting_index.md.beb48015.lean.js",revision:null},{url:"assets/scripting_placement-prevention.md.2c894a39.js",revision:null},{url:"assets/scripting_placement-prevention.md.2c894a39.lean.js",revision:null},{url:"assets/scripting_resources.md.50bed377.js",revision:null},{url:"assets/scripting_resources.md.50bed377.lean.js",revision:null},{url:"assets/scripting_saving-loading.md.24e9eb80.js",revision:null},{url:"assets/scripting_saving-loading.md.24e9eb80.lean.js",revision:null},{url:"assets/scripting_script-modules.md.2e43fed9.js",revision:null},{url:"assets/scripting_script-modules.md.2e43fed9.lean.js",revision:null},{url:"assets/scripting_script-net.md.e4605445.js",revision:null},{url:"assets/scripting_script-net.md.e4605445.lean.js",revision:null},{url:"assets/scripting_script-server.md.5de2054f.js",revision:null},{url:"assets/scripting_script-server.md.5de2054f.lean.js",revision:null},{url:"assets/scripting_script-watchdog.md.ab4b31c4.js",revision:null},{url:"assets/scripting_script-watchdog.md.ab4b31c4.lean.js",revision:null},{url:"assets/scripting_scripting-editor-qna.md.9736d523.js",revision:null},{url:"assets/scripting_scripting-editor-qna.md.9736d523.lean.js",revision:null},{url:"assets/scripting_scripting-intro.md.bbfa2cb3.js",revision:null},{url:"assets/scripting_scripting-intro.md.bbfa2cb3.lean.js",revision:null},{url:"assets/scripting_starting-scripts.md.b20ca09f.js",revision:null},{url:"assets/scripting_starting-scripts.md.b20ca09f.lean.js",revision:null},{url:"assets/scripting_troubleshooting.md.f5689f92.js",revision:null},{url:"assets/scripting_troubleshooting.md.f5689f92.lean.js",revision:null},{url:"assets/scripting_typescript.md.4ff3f388.js",revision:null},{url:"assets/scripting_typescript.md.4ff3f388.lean.js",revision:null},{url:"assets/scripting_what-is-script.md.b13c7201.js",revision:null},{url:"assets/scripting_what-is-script.md.b13c7201.lean.js",revision:null},{url:"assets/servers_index.md.830b2529.js",revision:null},{url:"assets/servers_index.md.830b2529.lean.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.94ee255f.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.94ee255f.lean.js",revision:null},{url:"assets/servers_server-software.md.f951e89a.js",revision:null},{url:"assets/servers_server-software.md.f951e89a.lean.js",revision:null},{url:"assets/style.04663297.css",revision:null},{url:"assets/test.md.8fe64837.js",revision:null},{url:"assets/test.md.8fe64837.lean.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.bc1874a6.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.bc1874a6.lean.js",revision:null},{url:"assets/visuals_animation-effects.md.40f75f68.js",revision:null},{url:"assets/visuals_animation-effects.md.40f75f68.lean.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.f24a17e2.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.f24a17e2.lean.js",revision:null},{url:"assets/visuals_custom-hurt-animations.md.277a0649.js",revision:null},{url:"assets/visuals_custom-hurt-animations.md.277a0649.lean.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.54346619.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.54346619.lean.js",revision:null},{url:"assets/visuals_death-animations.md.4d847944.js",revision:null},{url:"assets/visuals_death-animations.md.4d847944.lean.js",revision:null},{url:"assets/visuals_deferred-qna.md.291dd542.js",revision:null},{url:"assets/visuals_deferred-qna.md.291dd542.lean.js",revision:null},{url:"assets/visuals_glowing-texture.md.b0ab6afb.js",revision:null},{url:"assets/visuals_glowing-texture.md.b0ab6afb.lean.js",revision:null},{url:"assets/visuals_index.md.80f73fe3.js",revision:null},{url:"assets/visuals_index.md.80f73fe3.lean.js",revision:null},{url:"assets/visuals_introduction.md.0659f2f2.js",revision:null},{url:"assets/visuals_introduction.md.0659f2f2.lean.js",revision:null},{url:"assets/visuals_leash-position.md.c2a265c6.js",revision:null},{url:"assets/visuals_leash-position.md.c2a265c6.lean.js",revision:null},{url:"assets/visuals_material-creations.md.0a2e0cd1.js",revision:null},{url:"assets/visuals_material-creations.md.0a2e0cd1.lean.js",revision:null},{url:"assets/visuals_materials.md.8d26a35f.js",revision:null},{url:"assets/visuals_materials.md.8d26a35f.lean.js",revision:null},{url:"assets/visuals_math-based-animations.md.f28ae402.js",revision:null},{url:"assets/visuals_math-based-animations.md.f28ae402.lean.js",revision:null},{url:"assets/visuals_player-geometry.md.c16e16c7.js",revision:null},{url:"assets/visuals_player-geometry.md.c16e16c7.lean.js",revision:null},{url:"assets/visuals_remove-shadows.md.ea8e9608.js",revision:null},{url:"assets/visuals_remove-shadows.md.ea8e9608.lean.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.29fd0d03.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.29fd0d03.lean.js",revision:null},{url:"assets/visuals_structure-presentation.md.20b57f47.js",revision:null},{url:"assets/visuals_structure-presentation.md.20b57f47.lean.js",revision:null},{url:"assets/vr_editing-your-first-model.md.614b66a0.js",revision:null},{url:"assets/vr_editing-your-first-model.md.614b66a0.lean.js",revision:null},{url:"assets/vr_index.md.131432c1.js",revision:null},{url:"assets/vr_index.md.131432c1.lean.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.2c351363.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.2c351363.lean.js",revision:null},{url:"assets/vr_pack_setup.md.49ba412d.js",revision:null},{url:"assets/vr_pack_setup.md.49ba412d.lean.js",revision:null},{url:"assets/world-generation_biome-tags.md.9f6b87cb.js",revision:null},{url:"assets/world-generation_biome-tags.md.9f6b87cb.lean.js",revision:null},{url:"assets/world-generation_biomes.md.6635cd39.js",revision:null},{url:"assets/world-generation_biomes.md.6635cd39.lean.js",revision:null},{url:"assets/world-generation_custom-ores.md.597112cb.js",revision:null},{url:"assets/world-generation_custom-ores.md.597112cb.lean.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.2bd59775.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.2bd59775.lean.js",revision:null},{url:"assets/world-generation_feature-types.md.6bb521f7.js",revision:null},{url:"assets/world-generation_feature-types.md.6bb521f7.lean.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.80d5ce51.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.80d5ce51.lean.js",revision:null},{url:"assets/world-generation_index.md.140ee714.js",revision:null},{url:"assets/world-generation_index.md.140ee714.lean.js",revision:null},{url:"assets/world-generation_structure-features.md.c3729eba.js",revision:null},{url:"assets/world-generation_structure-features.md.c3729eba.lean.js",revision:null},{url:"assets/world-generation_surface-builder.md.1b5e465f.js",revision:null},{url:"assets/world-generation_surface-builder.md.1b5e465f.lean.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.907a4ef7.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.907a4ef7.lean.js",revision:null},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/images/favicons/android-chrome-192x192.png",revision:"1fb5ac37a9c926d44d9377dffdb866ec"},{url:"assets/images/favicons/android-chrome-256x256.png",revision:"7403912a35eebe25b54355dfd27106af"},{url:"manifest.webmanifest",revision:"c5a08b36b4610e940947bce83726f2a1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
