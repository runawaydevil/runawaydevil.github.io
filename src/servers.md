---
layout: page.njk
title: Servers
---

<figure>
  <img src="https://shot.1208.pro/uploads/ZDiConNJEcGs1AaytPauM7N3vP8Fe7oKch5VCArd.jpg" alt="My Homelab Server Rack" style="max-width: 100%; max-height: 480px; width: auto; border-radius: 8px; display: block; margin: 0 auto; object-fit: cover;">
  <figcaption style="text-align: center; font-size: 0.9em; margin-top: 0.8em; opacity: 0.8;">The homelab in all its glowing glory.</figcaption>
</figure>

A summary of my current infrastructure: The lab is a mix of enterprise virtualization, efficient mini-PCs, dedicated firewall hardware, and various Single Board Computers (SBCs). It scales from a massive 72-vCPU dual-Xeon Proxmox node down to low-power ARM boards, covering virtualization, network security, unRAID storage, and lightweight container duty.

<hr>

## Heavy Servers

### Kaiser (Proxmox Virtualization)
The heavy lifter of the lab, providing massive compute for VMs and containers.
- **Node:** `kaiser`
- **OS:** Proxmox VE 8.4.16 (Linux 6.8.12)
- **CPU:** 2x Intel Xeon E5-2686 v4 @ 2.30GHz (36 Cores / 72 Threads)
- **RAM:** ~125 GiB
- **Motherboard:** INTEL X99

### Nyx (Unraid Storage & Compute)
Dedicated to storage management and heavy workloads on Unraid.
- **Node:** `nyx`
- **OS:** Unraid 7.2.0
- **CPU:** AMD Ryzen 7 5800X (8 Cores / 16 Threads)
- **RAM:** ~125 GiB
- **Motherboard:** ASRock X570 Steel Legend

### Murad (pfSense Firewall)
The gateway, handling routing, firewall rules, and local networking.
- **Node:** `murad`
- **OS:** pfSense 2.8.1-RELEASE (FreeBSD 15.0-CURRENT)
- **CPU:** AMD Ryzen 5 4600G (6 Cores / 12 Threads)
- **RAM:** ~32 GiB
- **Storage:** 809 GB (ZFS)

### Khan (Debian Mini PC)
A compact Beelink node for lightweight, always-on services.
- **Node:** `khan`
- **OS:** Debian GNU/Linux 13
- **CPU:** Intel Celeron N5105 @ 2.00GHz (4 Cores / 4 Threads)
- **RAM:** ~15 GiB
- **Motherboard:** AZW U59 (Beelink)

### Forsaken (Legacy Node)
An older box still pulling its weight on Debian Bookworm.
- **Node:** `forsaken`
- **OS:** Debian GNU/Linux 12
- **CPU:** Intel Pentium G2030 @ 3.00GHz (2 Cores / 2 Threads)
- **RAM:** ~15 GiB
- **Storage:** ~457 GiB (Hitachi 500GB HDD)

<hr>

## Single Board Computers (SBC) & Micro PCs

### Intel NUC
A robust micro PC for general x86 applications.
- **CPU:** Intel Celeron J3455 (4 Cores / 4 Threads, 1.5-2.3 GHz, 10W TDP)
- **RAM:** 16 GB DDR3L SO-DIMM
- **Connectivity:** GbE LAN, Intel Wireless-AC 3168, HDMI 2.0 (4K@60)

### ZimaBoard 432
A hackable x86 single board server ideal for network appliances.
- **CPU:** Intel Celeron N3450 (4 Cores, 1.1-2.2 GHz, 6W TDP, Fanless)
- **RAM:** 4 GB LPDDR4
- **Storage & Ports:** 32 GB eMMC, 2x SATA 6.0 Gb/s, 2x GbE LAN

### Orange Pi 3B & CM4
ARM-based boards running solid Rockchip processors.
- **SoC:** Rockchip RK3566 (4x Cortex-A55 @ ~1.8 GHz)
- **RAM:** 4 GB LPDDR4/LPDDR4X

### Orange Pi Zero 2W
A tiny ARM board for lightweight tasks.
- **SoC:** Allwinner H618 (4x Cortex-A53 @ ~1.5 GHz)
- **RAM:** 1 GB
