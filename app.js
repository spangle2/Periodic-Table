// Element data - abbreviated for practicality
const elements = [
    { number: 1, symbol: 'H', name: 'Hydrogen', category: 'nonmetals', mass: '1.008', electronegativity: 2.20, meltingPoint: -259.1, boilingPoint: -252.9, density: 0.09, group: 1, period: 1, state: 'gas', discoveryYear: 1766, atomicRadius: 53, electronConfig: '1s¹', electronConfigShort: '1s¹', shells: [1], uses: ['Fuel', 'Fertilizer production', 'Oil refining'], isotopes: [{ name: 'Hydrogen-1', abundance: '99.98%', halfLife: 'Stable' }, { name: 'Hydrogen-2 (Deuterium)', abundance: '0.02%', halfLife: 'Stable' }, { name: 'Hydrogen-3 (Tritium)', abundance: 'Trace', halfLife: '12.32 years' }] },
    { number: 2, symbol: 'He', name: 'Helium', category: 'noble-gases', mass: '4.0026', electronegativity: null, meltingPoint: -272.2, boilingPoint: -268.9, density: 0.18, group: 18, period: 1, state: 'gas', discoveryYear: 1868, atomicRadius: 31, electronConfig: '1s²', electronConfigShort: '1s²', shells: [2], uses: ['Balloons', 'Cryogenics', 'MRI machines'], isotopes: [{ name: 'Helium-3', abundance: '0.0002%', halfLife: 'Stable' }, { name: 'Helium-4', abundance: '99.9998%', halfLife: 'Stable' }] },
    { number: 3, symbol: 'Li', name: 'Lithium', category: 'alkali-metals', mass: '6.94', electronegativity: 0.98, meltingPoint: 180.5, boilingPoint: 1342, density: 0.53, group: 1, period: 2, state: 'solid', discoveryYear: 1817, atomicRadius: 167, electronConfig: '1s² 2s¹', electronConfigShort: '[He] 2s¹', shells: [2, 1], uses: ['Batteries', 'Mood stabilizers', 'Ceramics'], isotopes: [{ name: 'Lithium-6', abundance: '7.59%', halfLife: 'Stable' }, { name: 'Lithium-7', abundance: '92.41%', halfLife: 'Stable' }] },
    { number: 4, symbol: 'Be', name: 'Beryllium', category: 'alkaline-earth-metals', mass: '9.0122', electronegativity: 1.57, meltingPoint: 1287, boilingPoint: 2470, density: 1.85, group: 2, period: 2, state: 'solid', discoveryYear: 1797, atomicRadius: 112, electronConfig: '1s² 2s²', electronConfigShort: '[He] 2s²', shells: [2, 2], uses: ['Aerospace', 'X-ray equipment', 'Nuclear reactors'], isotopes: [{ name: 'Beryllium-9', abundance: '100%', halfLife: 'Stable' }] },
    // More elements would be included here...
    { number: 5, symbol: 'B', name: 'Boron', category: 'metalloids', mass: '10.81', electronegativity: 2.04, meltingPoint: 2075, boilingPoint: 4000, density: 2.34, group: 13, period: 2, state: 'solid', discoveryYear: 1808, atomicRadius: 87, electronConfig: '1s² 2s² 2p¹', electronConfigShort: '[He] 2s² 2p¹', shells: [2, 3], uses: ['Glass production', 'Detergents', 'Semiconductors'], isotopes: [{ name: 'Boron-10', abundance: '19.9%', halfLife: 'Stable' }, { name: 'Boron-11', abundance: '80.1%', halfLife: 'Stable' }] },
    { number: 6, symbol: 'C', name: 'Carbon', category: 'nonmetals', mass: '12.011', electronegativity: 2.55, meltingPoint: 3550, boilingPoint: 4027, density: 2.27, group: 14, period: 2, state: 'solid', discoveryYear: 'Prehistoric', atomicRadius: 67, electronConfig: '1s² 2s² 2p²', electronConfigShort: '[He] 2s² 2p²', shells: [2, 4], uses: ['Steel production', 'Diamonds', 'Graphite'], isotopes: [{ name: 'Carbon-12', abundance: '98.93%', halfLife: 'Stable' }, { name: 'Carbon-13', abundance: '1.07%', halfLife: 'Stable' }, { name: 'Carbon-14', abundance: 'Trace', halfLife: '5,730 years' }] },
    { number: 7, symbol: 'N', name: 'Nitrogen', category: 'nonmetals', mass: '14.007', electronegativity: 3.04, meltingPoint: -210, boilingPoint: -195.8, density: 1.25, group: 15, period: 2, state: 'gas', discoveryYear: 1772, atomicRadius: 56, electronConfig: '1s² 2s² 2p³', electronConfigShort: '[He] 2s² 2p³', shells: [2, 5], uses: ['Fertilizers', 'Explosives', 'Refrigerant'], isotopes: [{ name: 'Nitrogen-14', abundance: '99.63%', halfLife: 'Stable' }, { name: 'Nitrogen-15', abundance: '0.37%', halfLife: 'Stable' }] },
    { number: 8, symbol: 'O', name: 'Oxygen', category: 'nonmetals', mass: '15.999', electronegativity: 3.44, meltingPoint: -218.8, boilingPoint: -183, density: 1.43, group: 16, period: 2, state: 'gas', discoveryYear: 1774, atomicRadius: 48, electronConfig: '1s² 2s² 2p⁴', electronConfigShort: '[He] 2s² 2p⁴', shells: [2, 6], uses: ['Respiration', 'Steel production', 'Medical uses'], isotopes: [{ name: 'Oxygen-16', abundance: '99.76%', halfLife: 'Stable' }, { name: 'Oxygen-17', abundance: '0.04%', halfLife: 'Stable' }, { name: 'Oxygen-18', abundance: '0.2%', halfLife: 'Stable' }] },
    // Add more elements as needed. For a full implementation, you would include all 118 elements.
];

// Main application functionality
document.addEventListener('DOMContentLoaded', () => {
    // Initialize periodic table
    generatePeriodicTable();
    setupEventListeners();
    
    // Display elements with animation
    animatePeriodicTable();
});

function generatePeriodicTable() {
    const periodicTable = document.getElementById('periodic-table');
    const lanthanideRow = document.getElementById('lanthanide-row');
    const actinideRow = document.getElementById('actinide-row');
    
    // Define grid positions for each element
    const elementPositions = getElementPositions();
    
    // Create element cells
    elements.forEach(element => {
        const elementCell = createElementCell(element);
        
        // Determine where to place the element in the table
        if (element.number >= 57 && element.number <= 71) {
            // Lanthanides
            lanthanideRow.appendChild(elementCell);
        } else if (element.number >= 89 && element.number <= 103) {
            // Actinides
            actinideRow.appendChild(elementCell);
        } else {
            // Main table
            const position = elementPositions[element.number];
            if (position) {
                elementCell.style.gridColumn = position.column;
                elementCell.style.gridRow = position.row;
                periodicTable.appendChild(elementCell);
            }
        }
    });
    
    // Add placeholder for lanthanides and actinides in the main table
    const lanthanidePlaceholder = createPlaceholderCell('lanthanides', '57-71', 'La-Lu');
    lanthanidePlaceholder.style.gridColumn = '3';
    lanthanidePlaceholder.style.gridRow = '6';
    periodicTable.appendChild(lanthanidePlaceholder);
    
    const actinidePlaceholder = createPlaceholderCell('actinides', '89-103', 'Ac-Lr');
    actinidePlaceholder.style.gridColumn = '3';
    actinidePlaceholder.style.gridRow = '7';
    periodicTable.appendChild(actinidePlaceholder);
}

function getElementPositions() {
    // Map of element numbers to their positions in the grid
    const positions = {};
    
    // Fill positions for main groups elements
    for (let period = 1; period <= 7; period++) {
        // Group 1 (alkali metals)
        positions[getElementNumber(period, 1)] = { row: period, column: 1 };
        
        // Group 2 (alkaline earth metals)
        positions[getElementNumber(period, 2)] = { row: period, column: 2 };
        
        // Groups 13-18 for periods 2-7
        if (period >= 2) {
            for (let group = 13; group <= 18; group++) {
                const column = group;
                positions[getElementNumber(period, group)] = { row: period, column };
            }
        }
    }
    
    // Fill positions for transition metals (groups 3-12)
    for (let period = 4; period <= 7; period++) {
        for (let group = 3; group <= 12; group++) {
            const column = group;
            positions[getElementNumber(period, group)] = { row: period, column };
        }
    }
    
    // Special handling for Helium (group 18, period 1)
    positions[2] = { row: 1, column: 18 };
    
    // Special handling for d-block elements in periods 6 and 7
    // (Skip lanthanides and actinides)
    for (let group = 3; group <= 12; group++) {
        // For period 6, elements after lanthanides
        positions[getElementNumber(6, group) + 14] = { row: 6, column: group };
        
        // For period 7, elements after actinides
        positions[getElementNumber(7, group) + 14] = { row: 7, column: group };
    }
    
    return positions;
}

function getElementNumber(period, group) {
    // This is a simplification and won't be accurate for all elements
    // For a full implementation, you would need a more complex mapping
    if (period === 1) {
        return group === 1 ? 1 : 2; // H and He
    } else if (period === 2) {
        return group <= 2 ? group + 2 : group + 2; // Li, Be and B through Ne
    } else if (period === 3) {
        return group <= 2 ? group + 10 : group + 10; // Na, Mg and Al through Ar
    } else {
        // This is approximate and would need refinement for a full implementation
        return (period - 1) * 8 + group;
    }
}

function createElementCell(element) {
    const cell = document.createElement('div');
    cell.className = `element-cell ${element.category}`;
    cell.setAttribute('data-element', element.number);
    
    cell.innerHTML = `
        <div class="element-number">${element.number}</div>
        <div class="element-symbol">${element.symbol}</div>
        <div class="element-name">${element.name}</div>
        <div class="element-mass">${element.mass}</div>
    `;
    
    // Add indicators for different views
    cell.innerHTML += `
        <div class="melting-point-indicator"></div>
        <div class="electronegativity-overlay"></div>
        <div class="density-indicator"></div>
    `;
    
    // Set animation delay for staggered entrance
    cell.style.animationDelay = `${(element.number % 20) * 0.05}s`;
    
    return cell;
}

function createPlaceholderCell(category, numberRange, symbolRange) {
    const cell = document.createElement('div');
    cell.className = `element-cell ${category} placeholder`;
    
    cell.innerHTML = `
        <div class="element-number">${numberRange}</div>
        <div class="element-symbol">${symbolRange}</div>
        <div class="element-name">${category.charAt(0).toUpperCase() + category.slice(1)}</div>
    `;
    
    return cell;
}

function setupEventListeners() {
    // Element click events
    document.querySelectorAll('.element-cell:not(.placeholder)').forEach(cell => {
        cell.addEventListener('click', handleElementClick);
    });
    
    // Close modal
    document.querySelector('.close-button').addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === document.getElementById('element-modal')) {
            closeModal();
        }
    });
    
    // Tab switching
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', switchTab);
    });
    
    // View modes
    document.getElementById('view-standard').addEventListener('click', () => switchView('standard'));
    document.getElementById('view-temp').addEventListener('click', () => switchView('melting-point'));
    document.getElementById('view-electronegativity').addEventListener('click', () => switchView('electronegativity'));
    document.getElementById('view-density').addEventListener('click', () => switchView('density'));
    
    // Search functionality
    const searchInput = document.getElementById('element-search');
    const searchResults = document.getElementById('search-results');
    
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase().trim();
        if (query.length < 1) {
            searchResults.style.display = 'none';
            return;
        }
        
        const matchedElements = elements.filter(element => 
            element.name.toLowerCase().includes(query) || 
            element.symbol.toLowerCase().includes(query) ||
            element.number.toString().includes(query)
        );
        
        displaySearchResults(matchedElements);
    });
    
    // Hide search results when clicking elsewhere
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            searchResults.style.display = 'none';
        }
    });
}

function handleElementClick(e) {
    const elementId = parseInt(e.currentTarget.getAttribute('data-element'));
    const element = elements.find(el => el.number === elementId);
    
    if (element) {
        displayElementModal(element);
    }
}

function displayElementModal(element) {
    const modal = document.getElementById('element-modal');
    
    // Set element data in the modal
    document.querySelector('.element-symbol-large').textContent = element.symbol;
    document.querySelector('.element-symbol-large').className = `element-symbol-large ${element.category}`;
    document.querySelector('.element-name').textContent = element.name;
    document.querySelector('.element-number').textContent = `Atomic Number: ${element.number}`;
    document.querySelector('.element-category').textContent = formatCategory(element.category);
    
    // Properties tab
    document.querySelector('.atomic-mass').textContent = `${element.mass} u`;
    document.querySelector('.state').textContent = `${capitalizeFirst(element.state)}`;
    document.querySelector('.melting-point').textContent = element.meltingPoint ? `${element.meltingPoint} °C` : 'Unknown';
    document.querySelector('.boiling-point').textContent = element.boilingPoint ? `${element.boilingPoint} °C` : 'Unknown';
    document.querySelector('.electronegativity').textContent = element.electronegativity ? `${element.electronegativity} (Pauling scale)` : 'Unknown';
    document.querySelector('.density').textContent = element.density ? `${element.density} g/cm³` : 'Unknown';
    document.querySelector('.discovered').textContent = element.discoveryYear ? `${element.discoveryYear}` : 'Ancient';
    document.querySelector('.group').textContent = element.group ? `Group ${element.group}` : 'N/A';
    document.querySelector('.period').textContent = `Period ${element.period}`;
    document.querySelector('.atomic-radius').textContent = element.atomicRadius ? `${element.atomicRadius} pm` : 'Unknown';
    
    // Electron configuration tab
    document.querySelector('.electron-config-full').textContent = element.electronConfig;
    document.querySelector('.electron-config-short').textContent = element.electronConfigShort;
    document.querySelector('.electron-shells').textContent = element.shells ? element.shells.join(', ') : 'Unknown';
    
    // Generate electron shell visualization
    generateElectronShellVisualization(element);
    
    // Isotopes tab
    const isotopeContainer = document.querySelector('.isotope-container');
    isotopeContainer.innerHTML = '';
    
    if (element.isotopes && element.isotopes.length) {
        element.isotopes.forEach(isotope => {
            const isotopeCard = document.createElement('div');
            isotopeCard.className = 'isotope-card';
            isotopeCard.innerHTML = `
                <div class="isotope-name">${isotope.name}</div>
                <div class="isotope-property"><span>Natural Abundance:</span> ${isotope.abundance}</div>
                <div class="isotope-property"><span>Half-life:</span> ${isotope.halfLife}</div>
            `;
            isotopeContainer.appendChild(isotopeCard);
        });
    } else {
        isotopeContainer.innerHTML = '<p>Isotope information not available.</p>';
    }
    
    // Uses tab
    const usesContainer = document.querySelector('.uses-container');
    usesContainer.innerHTML = '';
    
    if (element.uses && element.uses.length) {
        const useCategory = document.createElement('div');
        useCategory.className = 'use-category';
        useCategory.innerHTML = `
            <h4>Common Applications</h4>
            <ul>
                ${element.uses.map(use => `<li>${use}</li>`).join('')}
            </ul>
        `;
        usesContainer.appendChild(useCategory);
    } else {
        usesContainer.innerHTML = '<p>Usage information not available.</p>';
    }
    
    // Reset to properties tab
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
    document.querySelector('[data-tab="properties"]').classList.add('active');
    document.getElementById('properties').classList.add('active');
    
    // Show modal with animation
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
}

function generateElectronShellVisualization(element) {
    const container = document.getElementById('electron-shell-visualization');
    container.innerHTML = '';
    
    const centerX = container.offsetWidth / 2;
    const centerY = container.offsetHeight / 2;
    const maxRadius = Math.min(centerX, centerY) - 20;
    
    // Create shells
    if (element.shells && element.shells.length) {
        let totalElectrons = 0;
        
        element.shells.forEach((electronCount, shellIndex) => {
            const shellRadius = maxRadius * ((shellIndex + 1) / element.shells.length);
            
            // Create shell circle
            const shell = document.createElement('div');
            shell.className = 'electron-shell';
            shell.style.width = `${shellRadius * 2}px`;
            shell.style.height = `${shellRadius * 2}px`;
            shell.style.top = `${centerY - shellRadius}px`;
            shell.style.left = `${centerX - shellRadius}px`;
            
            container.appendChild(shell);
            
            // Create electrons for this shell
            for (let i = 0; i < electronCount; i++) {
                const angle = (i * (2 * Math.PI)) / electronCount;
                const electronX = centerX + shellRadius * Math.cos(angle) - 4; // 4 is half of electron width
                const electronY = centerY + shellRadius * Math.sin(angle) - 4; // 4 is half of electron height
                
                const electron = document.createElement('div');
                electron.className = 'electron';
                electron.style.left = `${electronX}px`;
                electron.style.top = `${electronY}px`;
                
                // Animation for electrons
                electron.style.animationName = 'orbit';
                electron.style.animationDuration = `${5 + shellIndex * 2}s`;
                electron.style.animationDelay = `${i * 0.2}s`;
                electron.style.animationIterationCount = 'infinite';
                electron.style.animationTimingFunction = 'linear';
                
                container.appendChild(electron);
                
                totalElectrons++;
            }
        });
    } else {
        container.innerHTML = '<p>Electron configuration visualization not available.</p>';
    }
}

function closeModal() {
    const modal = document.getElementById('element-modal');
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

function switchTab(e) {
    const tabId = e.target.getAttribute('data-tab');
    
    // Remove active class from all tabs and panes
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
    
    // Add active class to selected tab and pane
    e.target.classList.add('active');
    document.getElementById(tabId).classList.add('active');
    
    // Special handling for electron tab - may need to resize visualization
    if (tabId === 'electron') {
        const elementId = parseInt(document.querySelector('.element-number').textContent.match(/\d+/)[0]);
        const element = elements.find(el => el.number === elementId);
        if (element) {
            generateElectronShellVisualization(element);
        }
    }
}

function displaySearchResults(results) {
    const searchResults = document.getElementById('search-results');
    searchResults.innerHTML = '';
    
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="search-result-item">No elements found</div>';
    } else {
        results.forEach(element => {
            const resultItem = document.createElement('div');
            resultItem.className = 'search-result-item';
            resultItem.innerHTML = `
                <div class="search-result-symbol ${element.category}">${element.symbol}</div>
                <div>${element.name} (${element.number})</div>
            `;
            
            resultItem.addEventListener('click', () => {
                displayElementModal(element);
                searchResults.style.display = 'none';
                document.getElementById('element-search').value = '';
            });
            
            searchResults.appendChild(resultItem);
        });
    }
    
    searchResults.style.display = 'block';
}

function switchView(viewMode) {
    // Remove active class from all view buttons
    document.querySelectorAll('.view-controls button').forEach(btn => btn.classList.remove('active'));
    
    // Add active class to selected view button
    document.getElementById(`view-${viewMode}`).classList.add('active');
    
    // Remove all view classes from periodic table
    const periodicTable = document.querySelector('.periodic-table');
    periodicTable.classList.remove('melting-point-view', 'electronegativity-view', 'density-view');
    
    // Apply the selected view
    if (viewMode !== 'standard') {
        periodicTable.classList.add(`${viewMode}-view`);
        
        // Apply indicators based on the view mode
        document.querySelectorAll('.element-cell').forEach(cell => {
            const elementId = parseInt(cell.getAttribute('data-element'));
            if (!elementId) return;
            
            const element = elements.find(el => el.number === elementId);
            if (!element) return;
            
            if (viewMode === 'melting-point') {
                const indicator = cell.querySelector('.melting-point-indicator');
                if (element.meltingPoint) {
                    // Scale value to 0-1 range (approximate for melting points)
                    const normalizedValue = getNormalizedValue(element.meltingPoint, -273, 4000);
                    indicator.style.transform = `scaleX(${normalizedValue})`;
                    indicator.style.backgroundColor = getTemperatureColor(normalizedValue);
                } else {
                    indicator.style.transform = 'scaleX(0)';
                }
            } else if (viewMode === 'electronegativity') {
                const overlay = cell.querySelector('.electronegativity-overlay');
                if (element.electronegativity) {
                    // Scale electronegativity (0-4 Pauling scale)
                    const normalizedValue = getNormalizedValue(element.electronegativity, 0, 4);
                    overlay.style.transform = `translateY(${100 - normalizedValue * 100}%)`;
                    overlay.style.background = `linear-gradient(to top, rgba(0, 0, 255, ${normalizedValue}), rgba(0, 0, 255, 0))`;
                } else {
                    overlay.style.transform = 'translateY(100%)';
                }
            } else if (viewMode === 'density') {
                const indicator = cell.querySelector('.density-indicator');
                if (element.density) {
                    // Scale density (0-25 g/cm³ as a rough range)
                    const normalizedValue = getNormalizedValue(element.density, 0, 25);
                    indicator.style.transform = `scaleY(${normalizedValue})`;
                    indicator.style.height = `${normalizedValue * 100}%`;
                    indicator.style.backgroundColor = `rgba(0, 0, 0, ${normalizedValue * 0.5})`;
                } else {
                    indicator.style.transform = 'scaleY(0)';
                }
            }
        });
    }
}

function getNormalizedValue(value, min, max) {
    // Ensure the value is within the range
    const clampedValue = Math.max(min, Math.min(max, value));
    // Normalize to 0-1 range
    return (clampedValue - min) / (max - min);
}

function getTemperatureColor(normalizedValue) {
    // RGB color interpolation for temperature (blue to red)
    const r = Math.floor(normalizedValue * 255);
    const b = Math.floor(255 - normalizedValue * 255);
    return `rgb(${r}, 0, ${b})`;
}

function formatCategory(category) {
    // Convert category string to readable format
    return category
        .split('-')
        .map(word => capitalizeFirst(word))
        .join(' ');
}

function capitalizeFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function animatePeriodicTable() {
    document.querySelectorAll('.element-cell').forEach((cell, index) => {
        // Add staggered animation to each cell
        setTimeout(() => {
            cell.style.opacity = '1';
            cell.style.transform = 'scale(1)';
        }, index * 20);
    });
}